import React from 'react';
import './Move.css';

// redux
import { connect } from 'react-redux';

// components
import ContainerComponent from '../components/Container';

class MovePage extends React.Component {

  state = {
    type: "box",
    isChecked: true
  }

  handleChange() {
    const isChecked = !this.state.isChecked;
    const type = isChecked ? "box" : "ball";
    this.setState({ isChecked, type });
  }

  render() {
    const { type, isChecked } = this.state;

    return (
      <ContainerComponent>
        <div className="controller">
          <label htmlFor="box-type">
            <input type="checkbox" id="box-type" value={isChecked} onChange={() => this.handleChange()}/>
            <span>box</span>
          </label>
        </div>
        <div className="divider"></div>
        <div className="container">
          <div className="section">
            <div className="description">
              3초동안 300px 이동
            </div>
            <div className="content">
              <div className={`${type} left-to-right__3s`}></div>
            </div>
          </div>
      
          <div className="section">
            <div className="description">
              3초동안 300px 이동 2step
            </div>
            <div className="content">
              <div className={`${type} left-to-right__3s_percent`}></div>
            </div>
          </div>
      
          <div className="section">
            <div className="description">
              3초동안 100% 이동
            </div>
            <div className="content">
              <div className={`${type} left-to-right__3s_100percent`}></div>
            </div>
          </div>
      
          <div className="section">
            <div className="description">
              3초동안 300px 이동 (reverse)
            </div>
            <div className="content">
              <div className={`${type} right-to-left__3s`}></div>
            </div>
          </div>
      
          <div className="grid">
            <div className="grid__section">
              <div className="grid__description">
                위에서 아래로 이동
              </div>
              <div className="grid__content">
                <div className={`${type} up-to-down__3s`}></div>
              </div>
            </div>
      
            <div className="grid__section">
              <div className="grid__description">
                위에서 아래로 10단계 이동
              </div>
              <div className="grid__content">
                <div className={`${type} up-to-down__3s_percent`}></div>
              </div>
            </div>
      
            <div className="grid__section">
              <div className="grid__description">
                아래서 위로 이동
              </div>
              <div className="grid__content">
                <div className={`${type} down-to-up__3s`}></div>
              </div>
            </div>
      
            <div className="grid__section">
              <div className="grid__description">
                아래서 위로 10단계 이동
              </div>
              <div className="grid__content">
                <div className={`${type} down-to-up__3s_percent`}></div>
              </div>
            </div>
          </div>
      
          <div className="grid-cubic">
            <div className="grid-cubic__section">
              <div className="description">
                east
              </div>
              <div className="content">
                <div className={`${type} left-up-right-down__3s-ease`}></div>
              </div>
            </div>
            <div className="grid-cubic__section">
              <div className="description">
                ease-in
              </div>
              <div className="content">
                <div className={`${type} left-up-right-down__3s-ease-in`}></div>
              </div>
            </div>
            <div className="grid-cubic__section">
              <div className="description">
                ease-in-out
              </div>
              <div className="content">
                <div className={`${type} left-up-right-down__3s-ease-in-out`}></div>
              </div>
            </div>
            <div className="grid-cubic__section">
              <div className="description">
                ease-out
              </div>
              <div className="content">
                <div className={`${type} left-up-right-down__3s-ease-out`}></div>
              </div>
            </div>
            <div className="grid-cubic__section">
              <div className="description">
                linear
              </div>
              <div className="content">
                <div className={`${type} left-up-right-down__3s-linear`}></div>
              </div>
            </div>
            <div className="grid-cubic__section">
              <div className="description">
                custom cubic
              </div>
              <div className="content">
                <div className={`${type} left-up-right-down__3s-custom-cubic`}></div>
              </div>
            </div>
            <div className="grid-cubic__section">
              <div className="description">
                ease-out cubic
              </div>
              <div className="content">
                <div className={`${type} left-up-right-down__3s-ease-out-cubic`}></div>
              </div>
            </div>
            <div className="grid-cubic__section">
              <div className="description">
                ease-in cubic
              </div>
              <div className="content">
                <div className={`${type} left-up-right-down__3s-ease-in-cubic`}></div>
              </div>
            </div>
            <div className="grid-cubic__section">
              <div className="description">
                ease-in-out cubic
              </div>
              <div className="content">
                <div className={`${type} left-up-right-down__3s-ease-in-out-cubic`}></div>
              </div>
            </div>
          </div>
        </div>
      </ContainerComponent>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default MovePage;