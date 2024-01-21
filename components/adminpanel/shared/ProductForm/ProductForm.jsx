import TitlePage from "@/components/adminpanel/shared/titlePage/titlePage";
import Input from "@/components/adminpanel/shared/UI/Input/Input";
import styles from '@/components/adminpanel/shared/ProductForm/productForm.module.scss'
import CheckBoxCustom from "@/components/adminpanel/shared/UI/CheckBoxCustom/CheckBoxCustom";
import MySelect from "@/components/adminpanel/shared/UI/Select/Select";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addProductSchema} from "@/components/adminpanel/validation/addProductSchema";
import {useEffect, useMemo} from "react";
import ColorTabSelect from "@/components/adminpanel/shared/ColorTabSelect/ColorTabSelect";
import CreateCriterions from "@/components/adminpanel/shared/ProductForm/CreateCriterions/CreateCriterions";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import {setLoading} from "@/store/userReducer";
import {useDispatch} from "react-redux";
import {FaTrash} from "react-icons/fa";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import FileUploader from "@/components/adminpanel/shared/UI/FileUploader/FileUploader";

const ProductForm = ({categories, product, submitRequest}) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [buyedNum, setBuyedNum] = useState(0)
	const [freeNum, setFreeNum] = useState(0)

	const [videos, setVideos] = useState(product?.videos?.name ? product?.videos : undefined);
	console.log("VIDEO =========", videos)
	const [colthCategory, setColthCategory] = useState('Немає')
	const methods = useForm({
		mode: 'onBlur',
		resolver: yupResolver(addProductSchema),
		defaultValues: {
			name: product?.name || '',
			name_ru: product?.name_ru || '',
			price: product?.price || '',
			hint: product?.hint || '',
			hint_ru: product?.hint_ru || '',
			description: product?.description || '',
			description_ru: product?.description_ru || '',
			withDiscount: product?.withDiscount || false,
			onMain: product?.onMain || false,
			onBestsellers: product?.onBestsellers || false,
			categoryId: product?.categoryId || categories[0]?.id,
			subcategoryId: product?.subcategoryId || '',
			discountValue: product?.discountValue || '',
			Colors: product?.Colors || [],
			Criterions: product?.Criterions || []
		}
	})
	useEffect(() => {
		if (product) {
			const newColors = product?.Colors.map(color => {
				const ProductImages = color?.ProductImages?.map(image => {
					return ({
						name: image.image.name,
						url: image.image.url,
					})
				})
				return ({
					id: color.id,
					name: color.name,
					ProductImages: ProductImages
				})
			})
			methods.setValue('Colors', newColors);
		}
	},[])


	const handlerAddSale = async () => {
		const dataSend = {
			idProduct: product.id,
			buyedNum: buyedNum,
			freeNum: freeNum,
			cloth: colthCategory
		}

			const resPopup = await fetch('/api/products/sales', {
				method: "POST",
				body: JSON.stringify(dataSend)
			})
	
			const resPopupData = await resPopup.json()
	
			console.log(resPopupData)
			setBuyedNum(0)
			setFreeNum(0)
			setColthCategory('Немає')
			if(resPopupData.message == 'good'){
				alert('Акцію додано')
				router.replace(router.asPath)
			}else{
				alert('Помилка додавання акції')
			}
	}

	const handlerRemoveSale = async (e, ідетифікаторАкціїВБД) => {

		const dataSend = {idSale: ідетифікаторАкціїВБД}


		const resSale = await fetch('/api/products/sales', {
			method: "DELETE",
			body: JSON.stringify(dataSend)
		})

		const resSaleData = await resSale.json()

		console.log(resSaleData)
		setBuyedNum(0)
		setFreeNum(0)
		setColthCategory('Немає')
		if(resSaleData.message == 'good'){
			alert('Акцію видалено')
			router.replace(router.asPath)
		}else{
			alert('Помилка видалення акції')
		}
	}
	const categoriesOptions = categories.map(cat => ({label: cat.name, value: cat.id}))
	const subcategoriesOptions = useMemo(() => {
		return categories
			?.find(cat => cat.id === methods.getValues('categoryId'))
			?.Subcategories
			?.map(cat => ({label: cat.name, value: cat.id})) || []
	}, [methods.watch('categoryId')])


	useEffect(() => {
		methods.setValue('subcategoryId', undefined)
	}, [methods.watch('categoryId')])

	console.log(methods.watch())

	// useEffect(() => {
	// 	if (subcategoriesOptions?.length) {
	// 		// methods.setValue('subcategoryId', subcategoriesOptions[0].value)
	// 	} else {
	// 		methods.setValue('subcategoryId', '')
	// 	}
	// }, [subcategoriesOptions])
	// function delay(ms) {
	// 	return new Promise(resolve => setTimeout(resolve, ms));
	// }
	const submitHandler = async (data) => {
		try {
			dispatch(setLoading(true));
			// console.log('DATA ==========', data)
			// await delay(5000)
			const result = await submitRequest({...data, videos})
			console.log(result)
			router.push('/adminpanel/products')
			dispatch(setLoading(false));
		} catch (e) {
			dispatch(setLoading(false));
			console.log(e);
			alert(JSON.stringify(e.message))
		} finally {
			dispatch(setLoading(false));
		}

	}

	async function deleteHandler() {
		try {
			dispatch(setLoading(true))
			await fetch(`/api/products/${product.slug}`, {
				method: 'DELETE'
			})
			router.push('/adminpanel/products')
			dispatch(setLoading(false))
		} catch (e) {
			alert(JSON.stringify(e))
			dispatch(setLoading(false))
		} finally {
			dispatch(setLoading(false))
		}
	}

	return (
		<>
		<form onSubmit={methods.handleSubmit(submitHandler)}>
			<FormProvider {...methods}>
				<TitlePage title={product ? 'Змінити товар' : 'Додати товар'} />
				<div className={styles.content}>
					<div style={{margin: '15px 0'}}>
						<Input name={'name_ru'} label="Назва RU" style={{width: '100%'}}/>
					</div>
					<div className={styles.gridBlock}>
						<Input name={'name'} label="Назва" style={{gridArea: 'nameInput'}}/>
						<Input type={'number'}  name={'price'} label="Ціна"  style={{gridArea: 'priceInput'}}/>
						<Input type={'number'}  name={'discountValue'} label="Знижка" style={{gridArea: 'saleInput'}}  className={styles.saleInput}/>
						<CheckBoxCustom name={'withDiscount'} label="Знижка" style={{gridArea: 'saleCheck'}}  className={styles.saleCheck}/>
						<CheckBoxCustom name={'onMain'} label="На головній" style={{gridArea: 'onMainCheck'}} className={styles.onMainCheck}/>
						<CheckBoxCustom name={'onBestsellers'} label="Рекомендовані" style={{gridArea: 'recomendCheck'}} className={styles.recomendCheck}/>
						<MySelect name={'categoryId'} options={categoriesOptions} label="Категорія" style={{gridArea: 'categorySelect'}} />
						<MySelect name={'subcategoryId'} options={subcategoriesOptions} label="Підкатегорія" style={{gridArea: 'subCategorySelect'}} />
					</div>
					<div style={{margin: '15px 0'}}>
						<Input name={'hint'} label="Підказка" style={{width: 400}}/>
					</div>
					<div style={{margin: '15px 0'}}>
						<Input name={'hint_ru'} label="Підказка RU" style={{width: 400}} />
					</div>
					<div style={{maxWidth: '40%'}}>
						<div style={{fontSize: 20, marginBottom: 10}}>Відео</div>
						<FileUploader
							type={'video'}
							handleFile={(file) => setVideos(file)}
							showName={true}
							outerFileName={videos?.name}
						/>
						{videos?.name &&
							<Button color={'error'} onClick={() => setVideos(undefined)}>
								Видалити
							</Button>
						}

					</div>
					<CreateCriterions />
					<ColorTabSelect />
					<div style={{display: 'flex', gap: 20}}>
						<Input
							inputProps={{
								style: {width: 500}
							}}
							style={{marginBottom: 50}}
							rows={15}
							name={'description'}
							label="Опис"
							multiline
						/>
						<Input
							inputProps={{
								style: {width: 500}
							}}
							style={{marginBottom: 50}}
							rows={15}
							name={'description_ru'}
							label="Опис RU"
							multiline
						/>
					</div>

					<div style={{display: 'flex', gap: 15}}>
						<Button
							onClick={methods.handleSubmit(submitHandler)}
							variant="contained"
						>
							{product ? 'Змінити товар' : 'Додати товар'}
						</Button>
						{ product ?
							<Button
								onClick={deleteHandler}
								variant="contained"
								color={'error'}
							>
								<FaTrash size={'1.1em'}/>
							</Button>
							: null
						}
					</div>
				</div>
			</FormProvider>
		</form>
		<div  style={{marginTop: 30, marginBottom: '150px'}}>
			<h3 style={{marginBottom: 10}}>Знижки</h3>
			<div style={{display: 'flex', gap: 15}}>
				<TextField  id="outlined-basic" value={buyedNum} label="Кількість для знижки" variant="outlined" style={{width: 210}} onChange={(e) => setBuyedNum(e.target.value)} />
				<TextField  id="outlined-basic" value={freeNum} label="Кількість по знижці" variant="outlined" style={{width: 210}} onChange={(e) => setFreeNum(e.target.value)} />
				<FormControl style={{width: 250}}>
				<InputLabel id="demo-simple-select-label">Категрія тканини</InputLabel>
					<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={colthCategory}
					label="Категрія тканини"
					onChange={(e) => setColthCategory(e.target.value)}
					>
						<MenuItem value="Немає">Немає</MenuItem>
						<MenuItem value="Економ">Економ</MenuItem>
						<MenuItem value="Стандарт">Стандарт</MenuItem>
						<MenuItem value="Топ">Топ</MenuItem>
						<MenuItem value="Люкс">Люкс</MenuItem>
					</Select>
				</FormControl>
				<Button variant="contained" onClick={handlerAddSale}>Додати знижку</Button>
			</div>

			{
				product?.Sales?.map((value, key) => 
					<div style={{display: 'flex', justifyContent: 'space-between' ,backgroundColor: '#fff', borderRadius: '5px', padding: '5px 10px', marginTop: 10}}>
						<div style={{display: 'flex', gap: 15, alignItems: 'center'}}>
							<div>Кількість для знижки: {value.buyedNum}</div>
							<div>Кількість по знижці: {value.freeNum}</div>
							<div>Категрія тканини: {value.cloth}</div>
						</div>
						<div onClick={(e) => handlerRemoveSale(e, value.id)}>
							<img src="https://cdn-icons-png.flaticon.com/64/6932/6932392.png"  style={{width: '50%', cursor: 'pointer'}} alt="" />
						</div>
					</div>
				)
			}

			
			
		</div>
	</>
	);
};

export default ProductForm;