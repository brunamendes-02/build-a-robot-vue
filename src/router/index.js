import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';
import PartInfo from '../components/parts/PartInfo.vue';
import BrowseParts from '../components/parts/BrowseParts.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotBases from '../components/parts/RobotBases.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import SideBarStandard from '../components/sidebars/SideBarStandard.vue';
import SideBarBuild from '../components/sidebars/SideBarBuild.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SideBarStandard,
    },
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SideBarBuild,
    },
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
      {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
  }],
});
