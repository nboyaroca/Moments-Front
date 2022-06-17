import React from "react";
import { Card } from "../momentCard/Card";
import { CtMoments } from "./Moments.styled";

export function Moments() {
  return (
    <>
      <CtMoments>
        <Card>Moment1</Card>
        <Card>Moment2</Card>
        <Card>Moment3</Card>
        <Card>Moment4</Card>
        <Card>Moment5</Card>
        <Card>Moment6</Card>
        <Card>Moment7</Card>
        <Card>Moment8</Card>
      </CtMoments>
    </>
  );
}

export default Moments;
