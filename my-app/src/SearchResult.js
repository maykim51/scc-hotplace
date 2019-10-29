import React, { Component } from 'react';
import Footer from './Footer';

function BoxItem(props) {
  return (
    <li class="box_item">
      <a href="#">
        <div
          class="box_img"
          style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
          <div class="box_rank">
            <span class="box_rank_num">{props.rank}등</span>
          </div>
        </div>
        <div class="box_txt">
          <h2 class="box_title">{props.name}</h2>
          <p class="box_desc">{props.desc}</p>
          <p class="box_insta_count">{props.instatCount}</p>
        </div>
      </a>
    </li>
  );
}
class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCount: 28,
      searchList: [
        {
          rank: 1,
          name: '고에몬 강남점',
          desc: '이태리 파스타만큼 맛있는 일본식 스파게티 집',
          instatCount: '200건',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 2,
          name: '고에몬 강남점',
          desc: '이태리 파스타만큼 맛있는 일본식 스파게티 집',
          instatCount: '200건',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 3,
          name: '고에몬 강남점',
          desc: '이태리 파스타만큼 맛있는 일본식 스파게티 집',
          instatCount: '200건',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 4,
          name: '고에몬 강남점',
          desc: '이태리 파스타만큼 맛있는 일본식 스파게티 집',
          instatCount: '200건',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 5,
          name: '고에몬 강남점',
          desc: '이태리 파스타만큼 맛있는 일본식 스파게티 집',
          instatCount: '200건',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 6,
          name: '고에몬 강남점',
          desc: '이태리 파스타만큼 맛있는 일본식 스파게티 집',
          instatCount: '200건',
          backgroundImage: '/images/sample_image.jpg',
        },
      ],
    };
  }
  render() {
    return (
      <div class="main_container fullwidth">
        <main class="main search_result">
          <p class="search_count">검색결과 : {this.state.searchCount} 건</p>
          <ul class="box_container">
            {this.state.searchList.map((searchList, i) => {
              return (
              <BoxItem
              rank={searchList.rank}
              name={searchList.name}
              desc={searchList.desc}
              instatCount={searchList.instatCount}
              backgroundImage={searchList.backgroundImage}
              key={i}
            />);})}
          </ul>
          <p class="loading">다음 페이지를 불러오고 있습니다.</p>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default SearchResult;
