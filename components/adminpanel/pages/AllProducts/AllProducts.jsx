import TitlePage from "@/components/adminpanel/shared/titlePage/titlePage";
import classes from './allProducts.module.scss';
import ProductItem from "@/components/client/shared/ProductItem/ProductItem";

const AllProducts = ({products}) => {
	return (
		<>
			<TitlePage title="Всі продукти"/>
			<div className={classes.productsBox}>
				{
					products?.map((item) => (
						<ProductItem key={item.id} product={item} adminpanel={true} />
					))
				}
			</div>

		</>

	);
};

export default AllProducts;