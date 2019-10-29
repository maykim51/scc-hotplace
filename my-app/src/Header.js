import React, { Component } from 'react';

// 검색어 입력 필드
function SearchInput(props) {
  return (
    <span className="search_outline">
      <input
        id="search_input"
        type="text"
        title="검색"
        className="search_input"
        placeholder="강남역"
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={props.onChange}
        value={props.value}
      />
    </span>
  );
}

// 자동완성 키워드 목록 (낱개)
function SuggestList(props) {
  return (
    <a href={props.url} onClick={props.onClick}>
      <li className="search_keyword_item">{props.name}</li>
    </a>
  );
}

// 자동완성 키워드 목록 (모음 박스)
class SearchSuggest extends Component {
  render() {
    return (
      <div
        className={this.props.blind}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        <ul className="search_keyword_suggest_ul">
          <span className="search_keyword_subtitle">추천지역</span>
          <div className="search_keyword_list">{this.props.list}</div>
        </ul>
      </div>
    );
  }
}

// 입력된 검색어 삭제 버튼 (X버튼)
function SearchClearBtn(props) {
  return (
    <button type="button" className={props.blind} onClick={props.onClick}>
      <span className="blind">지우기</span>
      <span className="search_clear_btn_ico"></span>
    </button>
  );
}

// 검색버튼
function SearchBtn(props) {
  return (
    <button type="submit" className="search_btn">
      <span className="blind">검색</span>
      <span className="search_btn_ico"></span>
    </button>
  );
}

// 검색창 전체
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocus: false,
      SuggestHover: false,
      onChange: 0,
      value: '',
      suggestList: [
        {
          url: '#',
          name: '가로수길',
        },
        {
          url: '#',
          name: '강남역',
        },
        {
          url: '#',
          name: '건대',
        },
        {
          url: '#',
          name: '경리단길',
        },
        {
          url: '#',
          name: '광화문',
        },
        {
          url: '#',
          name: '남양주',
        },
        {
          url: '#',
          name: '대학로',
        },
      ],
    };
  }

  // input FocusOn일때 자동완성 키워드 목록 보이기
  suggestOn = () => {
    if (this.state.SuggestHover === false) {
      this.setState({ inputFocus: true });
    }
  };

  suggestOff = () => {
    if (this.state.SuggestHover === false) {
      this.setState({ inputFocus: false });
    }
  };

  // 자동완성 키워드 목록 mouseOn이면 목록 보여주기 유지
  suggestHoverOn = () => {
    this.setState({ SuggestHover: true });
  };

  suggestHoverOff = () => {
    this.setState({ SuggestHover: false });
  };

  // input에 검색어 입력시 X 버튼 나타남
  inputHandle = e => {
    var value = e.target.value;
    this.setState({ onChange: value.length });
    this.setState({ value: value });
  };

  // inputClear버튼 (X버튼) 클릭시 입력된 검색어 삭제
  inputClear = () => {
    this.setState({ value: '' });
    this.setState({ onChange: 0 });
  };

  // 자동완성 키워드 클릭시 input에 자동 입력
  autoComp = keyword => {
    this.setState({ value: keyword });
    this.setState({ inputFocus: false });
    this.setState({ SuggestHover: false });
    this.setState({ onChange: keyword.length });
  };

  render() {
    var sgtList = this.state.suggestList.map((list, i) => {
      return (
        <SuggestList
          url={list.url}
          name={list.name}
          key={i}
          onClick={() => this.autoComp(list.name)}
        />
      );
    });

    return (
      <div className="search">
        <form autoComplete="off">
          <fieldset>
            <legend className="blind">검색</legend>
            <SearchInput
              onFocus={this.suggestOn}
              onBlur={this.suggestOff}
              onChange={this.inputHandle}
              value={this.state.value}
            />
            <SearchClearBtn
              blind={this.state.onChange > 0 ? 'search_clear_btn' : 'blind'}
              onClick={this.inputClear}
            />
            <SearchBtn />
            <SearchSuggest
              blind={this.state.inputFocus ? 'search_keyword_suggest' : 'blind'}
              list={sgtList}
              onMouseEnter={this.suggestHoverOn}
              onMouseLeave={this.suggestHoverOff}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

// 헤더영역 전체
class Header extends Component {
  render() {
    return (
      <div className="header_container fullwidth">
        <header className="header">
          <div className="logo_area">
            <h1>
              <a href="http://#">
                <span className="logo">핫플검색</span>
              </a>
            </h1>
          </div>
          <Search></Search>
        </header>
      </div>
    );
  }
}

export default Header;
