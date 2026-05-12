export function Card({ name, price, categoryName, image, index }) {
  return (
    <div className="card h-100 shadow-sm border-0 bg-light">
      <img src={image} className="card-img-top bg-white" alt={name} style={{ height: '200px', objectFit: 'contain', padding: '15px' }} />
      <div className="card-body text-center">
        <h5 className="card-title text-primary fw-bold">Sản phẩm {index + 1}: {name}</h5>
        <p className="card-text fw-bold text-danger mt-3 fs-5">Giá: ${price}</p>
        <h6 className="card-subtitle mb-2 text-muted fst-italic">Danh mục: {categoryName}</h6>
      </div>
    </div>
  )
}
