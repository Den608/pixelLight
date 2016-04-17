import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import BackgroundColorPicker from "../components/color-picker/background-color-picker";
import PixelColorPicker from "../components/color-picker/pixel-color-picker";
import ToggleView from "../components/toggle-view";

class ControlPanel extends Component {
  render() {
    return(
      <div>
        <BackgroundColorPicker {...this.props}/>
        <PixelColorPicker {...this.props}/>
        <ToggleView/>
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
    rowCount: settings.row.count,
    columnCount: settings.column.count,
    pixelCount: parseFloat(settings.pixel.count)
  }
}


export default connect(mapStateToProps)(ControlPanel);