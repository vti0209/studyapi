import { useState, useEffect } from 'react';
import './App.css';
import { ProductsList } from './components/ProductsList';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { // useEffect để thực hiện việc tải dữ liệu khi component được mount
    const fetchData = async () => {
      try {
        const [resProducts, resCategories] = await Promise.all([ // Promise.all để thực hiện đồng thời hai yêu cầu fetch
          fetch('https://69fc1b7ffce564e259174aa7.mockapi.io/products'), // API trả về danh sách sản phẩm
          fetch('https://69fc1b7ffce564e259174aa7.mockapi.io/categories') // API trả về danh sách danh mục
        ]);
        
        const dataProducts = await resProducts.json(); // Chuyển đổi phản hồi sản phẩm thành JSON
        const dataCategories = await resCategories.json();
        
        setProducts(dataProducts); // Lưu danh sách sản phẩm vào state
        setCategories(dataCategories);  
        setLoading(false); // Đặt loading thành false sau khi dữ liệu đã được tải xong
      } catch (error) { // Xử lý lỗi nếu có vấn đề khi tải dữ liệu
        console.error("Lỗi khi tải dữ liệu:", error);
        setLoading(false);
      }
    };

    fetchData(); // Gọi hàm fetchData để bắt đầu tải dữ liệu khi component được dựng lên
  }, []);

  if (loading) {
    return <div className="container mt-4 text-center"><h4>Đang tải dữ liệu từ API...</h4></div>;
  }

  // Ghép tên danh mục vào từng sản phẩm dựa trên categoryId
  const productsWithCategory = products.map(product => {
    // Ép kiểu về String để đề phòng API trả về số (Number) thay vì chuỗi (String)
    const category = categories.find(c => String(c.id) === String(product.categoryId));
    return {
      ...product,
      categoryName: category ? category.name : "Không rõ"
    };
  });

  return (
    <div className="container mt-4" id="main-content">
      <h2 className="mb-4 text-center text-primary fw-bold">Trang Sản Phẩm</h2>
      <ProductsList items={productsWithCategory} />
    </div>
  );
}

export default App;



