import React, { Component } from "react";
import { DownloadButton } from "./Button.style";
type Props = {
  document: string;
  documentName: string;
  buttonText: string;
  image?: JSX.Element;
};
export default class DocumentDownloadButton extends Component<Props> {
  render() {
    return (
      <DownloadButton
        href={this.props.document}
        download={this.props.documentName}
      >
        {this.props.image ? this.props.image : undefined}
        {this.props.buttonText}
      </DownloadButton>
    );
  }
}
