import {json, useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import '@/styles/detail.css';
// import {getProductsImage} from '../utils/getProductsImage';
// import getProductsImageArray from '../utils/getProductsImageArray';
import pb from '@/api/pocketbase';
import DetailsNav from '../components/detail/DetailsNav';
import DetailsProducts from '../components/detail/DetailsProducts';
import DetailsWvProject from '../components/detail/DetailsWvProject';
import DetailsDetail from '../components/detail/DetailsDetail';
import DetailsYouMay from '../components/detail/DetailsYouMay';
import DetailsBeauty from '../components/detail/DetailsBeauty';
import DetailsReview from '../components/detail/DetailsReview';
import DetailsQuestion from '../components/detail/DetailsQuestion';
import DetailsDelivery from '../components/detail/DetailsDelivery';

function Details() {
	const {id} = useParams();
	const [activeTab, setActiveTab] = useState('detail');
	const [data, setData] = useState();
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	const tabStyle = {
		color: 'black',
		cursor: 'pointer',
	};
	useEffect(() => {
		async function getProduct() {
			try {
				const readProduct = await pb.collection('products').getOne(id);

				setData(readProduct);
				console.log(data);
			} catch (error) {
				if (!(error instanceof ClientResponseError)) {
					console.error(error);
				}
			}
		}
		getProduct();
	}, []);

	console.log(data);
	if (data) {
		return (
			<div className="relative mx-auto mb-[200px] w-[1240px]">
				<DetailsNav />
				<DetailsProducts data={data} />
				<DetailsWvProject />
				<DetailsDetail data={data} />
				<DetailsYouMay />
				<DetailsBeauty />
				<DetailsReview />
				<DetailsQuestion />
				<DetailsDelivery />
			</div>
		);
	}
}

export default Details;
