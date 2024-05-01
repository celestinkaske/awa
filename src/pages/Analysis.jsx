import React, { useState } from "react";
import { Header } from "../components/Header";
import Card from "../components/Card";
import DateFilter from "../components/DateFilter";

const AnalysisTab = () => {
  return (
    <div className="p-4">
      <Header>Analyse</Header>
      {/* Filter section */}
      <DateFilter></DateFilter>

      {/* KPIs section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* KPI 1 */}
        <Card title="Total entries"></Card>
        {/* KPI 2 */}
        <Card title="Average time spend"></Card>
        {/* KPI 3 */}
        <Card title="Average feeling"></Card>
        {/* KPI 4 */}
        <Card title="Most used pillar"></Card>
      </div>

      {/* Graphs section */}
      <div className="grid gap-4 mb-4">
        <Card title="Word cloud"></Card>
        {/* Graph 1: Evolution of feeling */}
        <Card title="Evolution of feeling"></Card>
        {/* Graph 2: Weekly correlation between feeling and pillars */}
        <Card title="Weekly correlation"></Card>
        {/* Graph 3: Most used positive words */}
        <Card title="5 most used positive words"></Card>
        {/* Graph 4: Most used negative words */}
        <Card title="5 most used negative words"></Card>
      </div>
    </div>
  );
};

export default AnalysisTab;
