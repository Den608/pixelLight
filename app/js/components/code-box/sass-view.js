import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/_code-box.scss";

import _ from "lodash";

class SASSView extends React.Component {
  constructor(){
    super();
  }
  render() {
    const{dispatch, sassView, pixelCount, columnCount, rowCount, xPos, yPos, rectColor} = this.props;
    if(sassView){
      let colorStore   = _.uniq(rectColor);
      let colorVar     = [];
      let xVar         = [];
      let yVar         = [];
      let boxShadowVar = [];
      let xPosSorted   = _.sortBy(xPos);
      let yPosSorted   = _.sortBy(yPos);
      // let xPosSorted   = _.sort(xPos);

      colorStore.map(function(value,idx){
        colorVar.push(
          `$color-${idx}: ${value}; `
        )
      });
      //x value array
      for(let x = 0; x < columnCount; x++){
          xVar.push(
            `X${x}: $num*${x}; `
          )
      }
      //y value array
      for(let y = 0; y < rowCount; y++){
        yVar.push(
          `O${y}: $num*${y}; `
        )
      }
      //
      xPos.map(function(value, idx){
        boxShadowVar.push(
          `$X${xPosSorted[idx] / pixelCount} $Y${yPosSorted[idx] / pixelCount} ${rectColor[idx]}, `
        )
      });


      return(
        <div>
         $num: `${pixelCount}`;<br />
         {colorVar}<br /><br />
         {xVar}<br /><br />
         {yVar}<br /><br />
         box-shadow: {boxShadowVar}
        </div>
      );
    }
    return(
      <div></div>
    );

  }

}

export default SASSView;