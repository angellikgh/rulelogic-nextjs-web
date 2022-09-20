import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const SummaryWidget = dynamic(() => import('./widgets/SummaryWidget'), {
  ssr: false,
});
const OverdueWidget = dynamic(() => import('./widgets/OverdueWidget'), {
  ssr: false,
});
const IssuesWidget = dynamic(() => import('./widgets/IssuesWidget'), {
  ssr: false,
});
const FeaturesWidget = dynamic(() => import('./widgets/FeaturesWidget'), {
  ssr: false,
});
const GithubIssuesWidget = dynamic(
  () => import('./widgets/GithubIssuesWidget'),
  {
    ssr: false,
  }
);
const TaskDistributionWidget = dynamic(
  () => import('./widgets/TaskDistributionWidget'),
  {
    ssr: false,
  }
);
const ScheduleWidget = dynamic(() => import('./widgets/ScheduleWidget'), {
  ssr: false,
});

function HomeTab() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <SummaryWidget />
      </motion.div>
      <motion.div variants={item}>
        <OverdueWidget />
      </motion.div>
      <motion.div variants={item}>
        <IssuesWidget />
      </motion.div>
      <motion.div variants={item}>
        <FeaturesWidget />
      </motion.div>
      <motion.div variants={item} className="sm:col-span-2 md:col-span-4">
        <GithubIssuesWidget />
      </motion.div>
      <motion.div
        variants={item}
        className="sm:col-span-2 md:col-span-4 lg:col-span-2"
      >
        <TaskDistributionWidget />
      </motion.div>
      <motion.div
        variants={item}
        className="sm:col-span-2 md:col-span-4 lg:col-span-2"
      >
        <ScheduleWidget />
      </motion.div>
    </motion.div>
  );
}

export default HomeTab;
