import React from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip as RTooltip, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  BarChart, Bar,
} from "recharts";

const DEFAULT_COLORS = {
  primary: "#3B82F6",   // blue-500
  secondary: "#10B981", // emerald-500
  accent: "#F59E0B",    // amber-500
  service: "#14B8A6",   // teal-500
  product: "#6366F1",   // indigo-500
  startup: "#F97316",   // orange-500
};

const Card = ({ title, children }) => (
  <div className="rounded-2xl bg-[#1A1A1A] shadow-md border border-gray-800 p-4 md:p-6">
    {title && <h3 className="text-sm font-semibold text-gray-300 mb-3">{title}</h3>}
    {children}
  </div>
);

export default function ChartsDashboard({
  readiness = { service: 40, product: 55, startup: 65 },
  skills = [
    { skill: "DSA", score: 70 },
    { skill: "React", score: 85 },
    { skill: "Node.js", score: 60 },
    { skill: "Databases", score: 50 },
    { skill: "Cloud", score: 45 },
  ],
  history = [
    { date: "2025-07-25", score: 52 },
    { date: "2025-08-01", score: 58 },
    { date: "2025-08-08", score: 63 },
    { date: "2025-08-15", score: 67 },
    { date: "2025-08-22", score: 71 },
  ],
  categories = [
    { type: "Service", value: 40 },
    { type: "Product", value: 55 },
    { type: "Startup", value: 65 },
  ],
  colors = DEFAULT_COLORS,
}) {
  const readinessPieData = [
    { name: "Service", value: readiness.service, color: colors.service },
    { name: "Product", value: readiness.product, color: colors.product },
    { name: "Startup", value: readiness.startup, color: colors.startup },
  ];

  const avgScore =
    Math.round(
      (readiness.service + readiness.product + readiness.startup) / 3
    ) || 0;

  return (
    <section className="w-full bg-[#0D0D0D] min-h-screen px-4 md:px-6 lg:px-8 py-6 text-white">
      {/* Header Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6">
        <Card>
          <p className="text-xs text-gray-400">Overall Readiness</p>
          <p className="text-3xl font-bold text-white">{avgScore}%</p>
          <p className="text-xs text-gray-400 mt-1">Average across 3 categories</p>
        </Card>
        <Card>
          <p className="text-xs text-gray-400">Service-Based</p>
          <p className="text-2xl font-semibold" style={{ color: colors.service }}>
            {readiness.service}%
          </p>
          <div className="w-full h-2 bg-gray-800 rounded-full mt-2">
            <div
              className="h-2 rounded-full"
              style={{ width: `${readiness.service}%`, backgroundColor: colors.service }}
            />
          </div>
        </Card>
        <Card>
          <p className="text-xs text-gray-400">Product-Based</p>
          <p className="text-2xl font-semibold" style={{ color: colors.product }}>
            {readiness.product}%
          </p>
          <div className="w-full h-2 bg-gray-800 rounded-full mt-2">
            <div
              className="h-2 rounded-full"
              style={{ width: `${readiness.product}%`, backgroundColor: colors.product }}
            />
          </div>
        </Card>
        <Card>
          <p className="text-xs text-gray-400">Startup</p>
          <p className="text-2xl font-semibold" style={{ color: colors.startup }}>
            {readiness.startup}%
          </p>
          <div className="w-full h-2 bg-gray-800 rounded-full mt-2">
            <div
              className="h-2 rounded-full"
              style={{ width: `${readiness.startup}%`, backgroundColor: colors.startup }}
            />
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Readiness Pie */}
        <Card title="Company-Type Readiness (%)">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={readinessPieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                >
                  {readinessPieData.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={24} wrapperStyle={{ color: "#fff" }} />
                <RTooltip
                  formatter={(v, n) => [`${v}%`, n]}
                  contentStyle={{ background: "#1F2937", border: "none", borderRadius: "8px" }}
                  itemStyle={{ color: "#fff" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Skills Radar */}
        <Card title="Skill Strengths vs Weaknesses">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skills}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: "#D1D5DB", fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#9CA3AF" }} />
                <Radar
                  dataKey="score"
                  stroke={colors.primary}
                  fill={colors.primary}
                  fillOpacity={0.35}
                />
                <RTooltip
                  formatter={(v) => [`${v}%`, "Score"]}
                  contentStyle={{ background: "#1F2937", border: "none", borderRadius: "8px" }}
                  itemStyle={{ color: "#fff" }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Progress Line */}
        <Card title="Readiness Progress Over Time">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={history} margin={{ left: 8, right: 8 }}>
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis domain={[0, 100]} stroke="#9CA3AF" />
                <RTooltip
                  formatter={(v) => [`${v}%`, "Score"]}
                  contentStyle={{ background: "#1F2937", border: "none", borderRadius: "8px" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke={colors.secondary}
                  strokeWidth={2.5}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Category Bars */}
        <Card title="Category Comparison">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categories} margin={{ left: 8, right: 8 }}>
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis dataKey="type" stroke="#9CA3AF" />
                <YAxis domain={[0, 100]} stroke="#9CA3AF" />
                <RTooltip
                  formatter={(v) => [`${v}%`, "Readiness"]}
                  contentStyle={{ background: "#1F2937", border: "none", borderRadius: "8px" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {categories.map((c, i) => (
                    <Cell
                      key={i}
                      fill={
                        c.type === "Service"
                          ? colors.service
                          : c.type === "Product"
                          ? colors.product
                          : colors.startup
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </section>
  );
}
