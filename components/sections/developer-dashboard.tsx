"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { Github, Star, GitCommit, Users, TrendingUp, Code } from "lucide-react"

// Demo data for charts
const activityData = [
  { month: "Jan", commits: 45, contributions: 120 },
  { month: "Feb", commits: 52, contributions: 135 },
  { month: "Mar", commits: 48, contributions: 128 },
  { month: "Apr", commits: 61, contributions: 145 },
  { month: "May", commits: 55, contributions: 138 },
  { month: "Jun", commits: 67, contributions: 152 },
  { month: "Jul", commits: 73, contributions: 168 },
  { month: "Aug", commits: 69, contributions: 162 },
  { month: "Sep", commits: 78, contributions: 175 },
  { month: "Oct", commits: 82, contributions: 188 },
  { month: "Nov", commits: 75, contributions: 172 },
  { month: "Dec", commits: 88, contributions: 195 },
]

const projectsData = [
  { name: "2022", projects: 3, stars: 12 },
  { name: "2023", projects: 8, stars: 45 },
  { name: "2024", projects: 15, stars: 128 },
  { name: "2025", projects: 22, stars: 256 },
]

const contributionData = [
  { day: "Mon", contributions: 8 },
  { day: "Tue", contributions: 12 },
  { day: "Wed", contributions: 15 },
  { day: "Thu", contributions: 10 },
  { day: "Fri", contributions: 18 },
  { day: "Sat", contributions: 6 },
  { day: "Sun", contributions: 4 },
]

// GitHub stats
const githubStats = {
  repositories: 28,
  stars: 441,
  commits: 1247,
  followers: 156,
}

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-3 shadow-card backdrop-blur-sm">
        <p className="text-white/70 text-sm mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-white text-sm" style={{ color: entry.color }}>
            {entry.name}: <span className="font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function DeveloperDashboard() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const statCards = [
    {
      label: "Repositories",
      value: githubStats.repositories,
      icon: Code,
      color: "text-blue-400",
    },
    {
      label: "Stars",
      value: githubStats.stars,
      icon: Star,
      color: "text-yellow-400",
    },
    {
      label: "Commits",
      value: githubStats.commits,
      icon: GitCommit,
      color: "text-green-400",
    },
    {
      label: "Followers",
      value: githubStats.followers,
      icon: Users,
      color: "text-purple-400",
    },
  ]

  return (
    <section
      id="dashboard"
      ref={ref}
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Developer Dashboard
        </h2>
        <div className="h-px w-16 bg-white/10 mx-auto mb-6" />
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Real-time insights into my development activity, contributions, and
          project growth.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group"
            >
              <div className="rounded-3xl bg-[#121212] border border-white/5 p-6 shadow-card hover:border-white/10 hover:shadow-apple-glow transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                  <TrendingUp className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors" />
                </div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl bg-[#121212] border border-white/5 p-6 md:p-8 shadow-card"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-white/70" />
            Activity Timeline
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis
                dataKey="month"
                stroke="rgba(255,255,255,0.4)"
                style={{ fontSize: "12px" }}
                tick={{ fill: "rgba(255,255,255,0.6)" }}
              />
              <YAxis
                stroke="rgba(255,255,255,0.4)"
                style={{ fontSize: "12px" }}
                tick={{ fill: "rgba(255,255,255,0.6)" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="commits"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="contributions"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: "#10b981", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="text-white/60">Commits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-white/60">Contributions</span>
            </div>
          </div>
        </motion.div>

        {/* Projects Growth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-3xl bg-[#121212] border border-white/5 p-6 md:p-8 shadow-card"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-white/70" />
            Projects Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectsData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis
                dataKey="name"
                stroke="rgba(255,255,255,0.4)"
                style={{ fontSize: "12px" }}
                tick={{ fill: "rgba(255,255,255,0.6)" }}
              />
              <YAxis
                stroke="rgba(255,255,255,0.4)"
                style={{ fontSize: "12px" }}
                tick={{ fill: "rgba(255,255,255,0.6)" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="projects" radius={[8, 8, 0, 0]}>
                {projectsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#8b5cf6" />
                ))}
              </Bar>
              <Bar dataKey="stars" radius={[8, 8, 0, 0]}>
                {projectsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#f59e0b" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400" />
              <span className="text-white/60">Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="text-white/60">Stars</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Weekly Contributions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 rounded-3xl bg-[#121212] border border-white/5 p-6 md:p-8 shadow-card"
      >
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <Github className="w-5 h-5 text-white/70" />
          Weekly Contributions
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={contributionData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.4)"
              style={{ fontSize: "12px" }}
              tick={{ fill: "rgba(255,255,255,0.6)" }}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              style={{ fontSize: "12px" }}
              tick={{ fill: "rgba(255,255,255,0.6)" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="contributions"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#colorContributions)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  )
}

