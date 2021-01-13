import React from "react";
import ProgressStyles from "./progress.styles";

type ProgressProps = {
    width?: string;
};

const Progress = ({ width = "0" }: ProgressProps) => <ProgressStyles width={width} />;

export default Progress;
