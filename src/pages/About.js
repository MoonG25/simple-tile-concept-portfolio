import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

// components
import ContainerComponent from '../components/Container';

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(240px, 1fr);
`;

const Div = styled.div`
  border: 1px solid black;
  grid-column-start: ${props => props.cs};
  grid-column-end: ${props => props.ce};
  grid-row-start: ${props => props.rs};
  grid-row-end: ${props => props.re};
`;

const ImageDiv = styled.div`
  border: 1px solid black;
  grid-column-start: ${props => props.cs};
  grid-column-end: ${props => props.ce};
  grid-row-start: ${props => props.rs};
  grid-row-end: ${props => props.re};
  background: url(${props => props.src}) center;
  background-size: cover;
`;

/**
 * @description 스킬같은것들 내용 추가하기
 */
class AboutPage extends React.Component {
  render() {
    return (
      <ContainerComponent>
        <main>
          <h1>About</h1>
          <a href="http://github.com/moong25" target="_blank">github</a>
          <hr />
          <Grid>
            <Div cs="1" ce="2" rs="1" re="2">
              <Typography variant="h2">
                PIKACHU
              </Typography>
              <Typography variant="h3">
                PIKACHU
              </Typography>
              <Typography variant="h4">
                PIKACHU
              </Typography>
              <Typography variant="h5">
                PIKACHU
              </Typography>
              <Typography variant="h6">
                PIKACHU
              </Typography>
            </Div>
            <ImageDiv
              src="https://img.insight.co.kr/static/2019/05/01/700/r6qs70z26i8rgou7632p.jpg"
              cs="2" ce="4" rs="1" re="2"
            />
            <Div cs="3" ce="4" rs="2" re="3">
              <Typography variant="h2">
                COFFEE
              </Typography>
              <Typography variant="h3">
                COFFEE
              </Typography>
              <Typography variant="h4">
                COFFEE
              </Typography>
            </Div>
            <ImageDiv
              src="https://scontent-ort2-2.cdninstagram.com/vp/9718900def8b364494670783e7936c33/5D7B9E8F/t51.2885-15/e35/59699152_322547731726986_1491420058396686197_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com"
              cs="1" ce="3" rs="2" re="3"
            />
            <ImageDiv 
              src="https://scontent-ort2-2.cdninstagram.com/vp/f4780387922c3982a5868ee4d47eb77d/5D6419BF/t51.2885-15/e35/59562911_608980796289139_141791852157608856_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com"
              cs="2" ce="4" rs="3" re="5"
            />
            <Div cs="1" ce="2" rs="3" re="5"></Div>
          </Grid>
          {/* <Typography variant="h2">
            피카추
          </Typography>
          <img src="https://img.insight.co.kr/static/2019/05/01/700/r6qs70z26i8rgou7632p.jpg" alt="" />
          <Typography variant="h2">
            좋아하는것 : 커피
          </Typography>
          <img src="https://scontent-ort2-2.cdninstagram.com/vp/9718900def8b364494670783e7936c33/5D7B9E8F/t51.2885-15/e35/59699152_322547731726986_1491420058396686197_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com" alt="" />
          <Typography variant="h2">
            직업 : 탐정
          </Typography>
          <img src="https://scontent-ort2-2.cdninstagram.com/vp/f4780387922c3982a5868ee4d47eb77d/5D6419BF/t51.2885-15/e35/59562911_608980796289139_141791852157608856_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com" alt="" /> */}
        </main>
      </ContainerComponent>
    )
  }
}

export default AboutPage;