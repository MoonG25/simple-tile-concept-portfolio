import React from 'react';
import { CssBaseline, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

// components
import ScrollMenuComponent from './ScrollMenu';

class ContainerComponent extends React.Component {
  state = {
    isOpen: false
  };

  _handleClickModalOpen = () => {
    this.setState({ isOpen: true });
  };

  _handleClickModalClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <ScrollMenuComponent onClickProfile={this._handleClickModalOpen} />
        {children}
        <Dialog
          open={isOpen}
          onClose={this._handleClickModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"안녕하세요 문지환입니다."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              문개발입니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this._handleClickModalClose} color="primary">
              부정의말
            </Button>
            <Button onClick={this._handleClickModalClose} color="primary" autoFocus>
              긍정의말
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default ContainerComponent;
