import { stats } from '@/data/stats';
import SectionLayout from '@/layouts/SectionLayout';
import { FC } from 'react';
import CountUp from 'react-countup';

const Stats: FC = () => {
  return (
    <SectionLayout
      id="stats"
      className= "bg-accent-600"
    >
      <div className="flex flex-wrap items-stretch justify-center gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="md:w-[150px] w-[120px]  h-fit flex flex-col items-center justify-center gap-1"
          >
            <stat.icon className="text-black/80 md:text-4xl text-3xl" />
            <h1 className="md:text-4xl text-2xl font-bold text-white">
              <CountUp
                end={stat.number}
                duration={8}
                enableScrollSpy
                scrollSpyDelay={500}
              />
              +
            </h1>
            <p className="text-white/80 uppercase font-bold text-center md:text-base text-xs">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Stats;
