import { motion } from 'framer-motion'
export default function Loader(title) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center h-64 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-white/80">{title}</p>
            </div>
        </motion.div>
    )
}
