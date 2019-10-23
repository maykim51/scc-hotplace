import React, { Component } from 'react';

function SearchInput(props) {
  return (
    <span className="search_outline">
      <input id="search_input" type="text" title="검색" className="search_input" placeholder="강남역" onFocus={props.cursorOn} onBlur={props.cursorOn}
      />
    </span>
  );
}

function SuggestList(props) {
    return (
      <a href={props.href}>
        <li className="search_keyword_item">{props.title}</li>
      </a>
    );
  }

class SearchSuggest extends Component {
  render() {
    return (
      <div
        className={this.props.cursorOn ? 'search_keyword_suggest' : 'blind'}
      >
        <ul className="search_keyword_suggest_ul">
          <span className="search_keyword_subtitle">추천지역</span>
          <div className="search_keyword_list">
          {this.props.list.map((list, i) => {
                        return (<SuggestList href={list.href}
                                            title={list.title}
                                              key={i}/>);
                    })}
          </div>
        </ul>
      </div>
    );
  }
}

function SearchClearBtn(props) {
    return (
      <button type="button" className="search_clear_btn">
        <span className="blind">지우기</span>
        <span className="search_clear_btn_ico"></span>
      </button>
    );
  }
  
  function SearchBtn(props) {
    return (
      <button type="submit" className="search_btn">
        <span className="blind">검색</span>
        <span className="search_btn_ico"></span>
      </button>
    );
  }

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorOn: false,
      suggestList: [
        {
          href: '#',
          title: '가로수길',
        },
        {
          href: '#',
          title: '강남역',
        },
        {
          href: '#',
          title: '건대',
        },
        {
          href: '#',
          title: '경리단길',
        },
        {
          href: '#',
          title: '광화문',
        },
        {
          href: '#',
          title: '남양주',
        },
        {
          href: '#',
          title: '대학로',
        },
      ],
    };
  }

  suggestHandle = () => {
    this.setState({ cursorOn: !this.state.cursorOn });
  }

  render() {
    return (
      <div className="search">
        <form>
          <fieldset>
            <legend className="blind">검색</legend>
            <SearchInput cursorOn={this.suggestHandle} />
            <SearchClearBtn />
            <SearchBtn />
            <SearchSuggest cursorOn={this.state.cursorOn} list={this.state.suggestList} />
          </fieldset>
        </form>
      </div>
    );
  }
}

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
