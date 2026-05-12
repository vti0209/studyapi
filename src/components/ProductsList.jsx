import { Card } from './Card'; // là đường dẫn tương đối đến file Card.jsx, nếu Card.jsx

export function ProductsList({ items }) {
  return (
    <div className="row">
      {items.map((item, index) => ( // index là chỉ số của phần tử trong mảng, dùng để hiển thị số thứ tự sản phẩm
        <div className="col-md-4 mb-4" key={item.id}> 
          <Card {...item} index={index} /> // truyền tất cả thuộc tính của item vào Card component, cùng với index để hiển thị số thứ tự
        </div>
      ))}
    </div>
  );
}
