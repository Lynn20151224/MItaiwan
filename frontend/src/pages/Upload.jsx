import { useState } from 'react';
import { Upload as UploadIcon, X } from 'lucide-react';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // 處理檔案選擇
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      // 建立預覽
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 處理拖放上傳
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('title', title);
    formData.append('description', description);

    try {
      const response = await fetch('http://localhost/taiwan/backend/api/upload.php', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('上傳失敗');
      }

      const data = await response.json();
      
      if (data.success) {
        // 清空表單
        setSelectedFile(null);
        setPreview(null);
        setTitle('');
        setDescription('');
        alert('上傳成功！');
      } else {
        throw new Error(data.error || '上傳失敗');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">上傳圖片</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* 上傳區域 */}
                <div 
                  className="border rounded p-4 text-center mb-4"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  style={{ 
                    borderStyle: 'dashed',
                    cursor: 'pointer'
                  }}
                >
                  {!preview ? (
                    <>
                      <Upload size={48} className="text-secondary mb-3" />
                      <p className="text-muted mb-0">
                        拖放圖片至此，或
                        <label className="text-primary mx-1" style={{ cursor: 'pointer' }}>
                          <input
                            type="file"
                            className="d-none"
                            accept="image/*"
                            onChange={handleFileSelect}
                          />
                          點擊選擇
                        </label>
                        檔案
                      </p>
                    </>
                  ) : (
                    <div className="position-relative">
                      <img
                        src={preview}
                        alt="Preview"
                        className="img-fluid rounded"
                        style={{ maxHeight: '300px' }}
                      />
                      <button
                        type="button"
                        className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                        onClick={() => {
                          setSelectedFile(null);
                          setPreview(null);
                        }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>

                {/* 標題和描述 */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">標題</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="為您的圖片加上標題"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">描述</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="描述這張圖片..."
                  />
                </div>

                {/* 錯誤訊息 */}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                {/* 提交按鈕 */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={!selectedFile || loading}
                >
                  {loading ? (
                    <span>
                      <span className="spinner-border spinner-border-sm me-2" />
                      上傳中...
                    </span>
                  ) : '上傳圖片'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}