import { json } from "react-router-dom";

// 이미지 불러오기
import thumbnail01 from '../assets/images/detail/301859392_LM29886.jpg';
import thumbnail02 from '../assets/images/detail/301859392_add1_GD94957.jpg';
import thumbnail03 from '../assets/images/detail/301859392_add2_OX78189.jpg';
import mybrand from '../assets/images/detail/bg_heart.png';
import share from '../assets/images/detail/share.png';
import star from '../assets/images/detail/star.png';
import intro from '../assets/images/detail/2022FW_intro.jpg';
import color from '../assets/images/detail/MJHD7622_01_pack_mj.jpg';
import detail01 from '../assets/images/detail/MJHD7622_navy_jn.jpg';
import detail02 from '../assets/images/detail/MJHD7622_info_jn.jpg';
import detail03 from '../assets/images/detail/MJHD7622_02_pack_mj.jpg';
import detail04 from '../assets/images/detail/MJHD7622_03_pack_mj.jpg';
import detail05 from '../assets/images/detail/MJHD7622_04_pack_mj.jpg';
import detail06 from '../assets/images/detail/MJHD7622_05_pack_mj.jpg';
import detail07 from '../assets/images/detail/MJHD7622_06_pack_mj.jpg';
import detail08 from '../assets/images/detail/MJHD7622_07_pack_mj.jpg';
import detail09 from '../assets/images/detail/MJHD7622_08_pack_mj.jpg';
import detail10 from '../assets/images/detail/MJHD7622_09_pack_mj.jpg';
import detail11 from '../assets/images/detail/MJHD7622_10_pack_mj.jpg';
import detail12 from '../assets/images/detail/MJHD7622_11_pack_mj.jpg';
import detail13 from '../assets/images/detail/MJHD7622_12_pack_mj.jpg';
import detail14 from '../assets/images/detail/MJHD7622_13_pack_mj.jpg';
import detail15 from '../assets/images/detail/MJHD7622_14_pack_mj.jpg';
import detail16 from '../assets/images/detail/MJHD7622_15_pack_mj.jpg';
import detail17 from '../assets/images/detail/MJHD7622_16_pack_mj.jpg';
import detail18 from '../assets/images/detail/MJHD7622_17_pack_mj.jpg';
import detail19 from '../assets/images/detail/MJHD7622_18_pack_mj.jpg';
import detail20 from '../assets/images/detail/MJHD7622_19_pack_mj.jpg';
import detail21 from '../assets/images/detail/MJHD7622_color_jn.jpg';
import detail22 from '../assets/images/detail/MJHD7622_size_jn.jpg';
import detail23 from '../assets/images/detail/cleaning_notice.jpg';
import list01_1 from '../assets/images/detail/list01/image_1.png';
import list01_2 from '../assets/images/detail/list01/image_2.png';
import list01_3 from '../assets/images/detail/list01/image_3.png';
import list01_4 from '../assets/images/detail/list01/image_4.png';
import list01_5 from '../assets/images/detail/list01/image_5.png';
import list01_6 from '../assets/images/detail/list01/image_6.png';
import list02_1 from '../assets/images/detail/list02/image_1.png';
import list02_2 from '../assets/images/detail/list02/image_2.png';
import list02_3 from '../assets/images/detail/list02/image_3.png';
import list02_4 from '../assets/images/detail/list02/image_4.png';
import list02_5 from '../assets/images/detail/list02/image_5.png';
import list02_6 from '../assets/images/detail/list02/image_6.png';



function Detail() {

  return (
    <>
      <div>HOME &#62; WOMEN &#62; APPAREL &#62; 티셔츠 &#62; 후드</div>
      <div className="flex flex-rows">
        <div className="mr-[55px]">
          <img className="mb-5" src={thumbnail01} alt="" />
          <ul className="flex flex-row w-[215px] justify-between">
            <li><img className="w-15 h-20" src={thumbnail01} alt="" /></li>
            <li><img className="w-15 h-20" src={thumbnail02} alt="" /></li>
            <li><img className="w-15 h-20" src={thumbnail03} alt="" /></li>
          </ul>
        </div>

        <div>
          <div className="flex flex-row">
            <ul>
              <li>WV PROJECT</li>
              <li>&#91;패키지&#93; 컬러인 후드 2PACK MJHD7622</li>
              <li>
                <span>
                  <img className="inline-block" src={star} alt="" /> 4.9
                </span>
                <span className="underline">55개 리뷰 &#62;
                </span>
              </li>
            </ul>
            <ul>
               <li>MY <img className="inline-block" src={mybrand} alt="" /> BRAND</li>
               <li><img className="w-6 h-6 bg-sprite" src={share} alt="" /></li>
            </ul>
          </div>
        

        </div>

        <dl>
          <dt>정상가</dt>
          <dd>108&#44;000 원</dd>
        </dl>

      </div>

      <img src={intro} alt="" />
      <img src={color} alt="" />
      <img src={detail01} alt="" />
      <img src={detail02} alt="" />
      <img src={detail03} alt="" />
      <img src={detail04} alt="" />
      <img src={detail05} alt="" />
      <img src={detail06} alt="" />
      <img src={detail07} alt="" />
      <img src={detail08} alt="" />
      <img src={detail09} alt="" />
      <img src={detail10} alt="" />
      <img src={detail11} alt="" />
      <img src={detail12} alt="" />
      <img src={detail13} alt="" />
      <img src={detail14} alt="" />
      <img src={detail15} alt="" />
      <img src={detail16} alt="" />
      <img src={detail17} alt="" />
      <img src={detail18} alt="" />
      <img src={detail19} alt="" />
      <img src={detail20} alt="" />
      <img src={detail21} alt="" />
      <img src={detail22} alt="" />
      <img src={detail23} alt="" />

      <div className="mb-20">
        <h6 className="mb-4">You may also like</h6>
        <div className="flex flex-row">
          <ul className="w-[195px]">
            <li className="mb-2"><img src={list01_1} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list01_2} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list01_3} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list01_4} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list01_5} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list01_6} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>
          
        </div>
      </div>

      <div>
        <h6 className="mb-4">Pick your beauty items</h6>
        <div className="flex flex-row">
          <ul className="w-[195px]">
            <li className="mb-2"><img src={list02_1} alt="" /></li>
            <li className="mb-4">FLUKE</li> 
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list02_2} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list02_3} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list02_4} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list02_5} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

          <ul className="w-[195px]">
            <li className="mb-2"><img src={list02_6} alt="" /></li>
            <li className="mb-4">FLUKE</li>
            <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
            <li>
              <span>44,500</span>
              <span>75,000</span>
              <span>41&#37;</span>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
}

export default Detail;



// import photo from '@/assets/image.svg';

















