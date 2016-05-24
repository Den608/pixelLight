import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import CSSModules from 'react-css-modules';
import styles from "../../scss/_code-box.scss";

import CodeBoxNav from "../components/code-box/code-box";

class CodeBox extends Component {
  render() {
    return(
      <div styleName='code_box_container'>
        <div styleName="code_box">
          <CodeBoxNav />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {colorPicker, settings} = state;
  return{
    colorPicker,
    backgroundHex: colorPicker.backgroundHex,
    backgroundRed: colorPicker.backgroundRed,
    backgroundGreen: colorPicker.backgroundGreen,
    backgroundBlue: colorPicker.backgroundBlue,
    pixelHex: colorPicker.pixelHex,
    pixelRed: colorPicker.pixelRed,
    pixelGreen: colorPicker.pixelGreen,
    pixelBlue: colorPicker.pixelBlue,
    rowCount: settings.row.count,
    columnCount: settings.column.count,
    pixelCount: parseFloat(settings.pixel.count)
  }
}


export default connect(mapStateToProps)(CSSModules(CodeBox,styles));
