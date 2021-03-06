import React, { Component } from 'react';

// 검색결과 박스 (낱개)
function BoxItem(props) {
  return (
    <li className="box_item">
      <a href="http://#">
        <div
          className="box_img"
          style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
          <div className="box_rank">
            <span className="box_rank_num">{props.rank}등</span>
          </div>
        </div>
        <div className="box_txt">
          <h2 className="box_title">{props.name}</h2>
          <p className="box_desc">{props.desc}</p>
          <p className="box_insta_count">{props.instatCount}</p>
        </div>
      </a>
    </li>
  );
}

// 검색결과 화면 전체 (박스 모음)
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
      <div className="main_container fullwidth">
        <main className="main search_result">
          <p className="search_count">검색결과 : {this.state.searchCount} 건</p>
          <ul className="box_container">
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
          <p className="loading">다음 페이지를 불러오고 있습니다.</p>
        </main>
      </div>
    );
  }
}

export default SearchResult;
