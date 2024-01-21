import ProductForm from "@/components/adminpanel/shared/ProductForm/ProductForm";
import formProductData from "@/components/adminpanel/utils/formProductData";

const UpdateProduct = ({categories, product }) => {
	const submitRequest = async (data) => {
		const formData = await formProductData({...data, id: product.id})
		// console.log('FORM DATA', JSON.parse(formData.get('fields')))
		// console.log('FORM FILES', formData.get('files'))
		// return 'DATA'
		const res = await fetch(`/api/products`, {
			method: 'PUT',
			// headers: {
			// 	"Content-type": "multipart/form-data",
			// },
			body: formData,
			headers: {
				"Content-Type": "application/json",
			}
		})
		const json = await res.json();
		return json;
	}

	return (
		<ProductForm product={product} categories={categories} submitRequest={submitRequest} />
	);
};

export default UpdateProduct;