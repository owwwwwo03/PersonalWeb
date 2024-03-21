// Projects data.
// Note: Here we are getting data from a ts file, but in a different project I'll be fetching these projects from some srt of APIs.
import fabAR_svg from '@/assets/projects_fab_ar.svg';
import kick_svg from '@/assets/projects_kick.svg';
import vbike_svg from '@/assets/projects_vbike.svg';
import kuchipa_svg from '@/assets/projects_kuchipa.svg';

const projects = [
    {
        id: 1,
		title: 'FabAR',
		category: ['MR'],
        skill:['Unity','Hololens','MRTK'],
        url: '/PersonalWeb/projects/fabAR',
        imgUrl:fabAR_svg,
    },
    {
        id: 2,
		title: 'Doddle',
		category: ['HCI','AI'],
        skill:['Unity','Stable Diffusion','UIUX'],
        url: '/PersonalWeb/projects/doddle',
        imgUrl:fabAR_svg,
    },
    {
        id: 3,
		title: 'MetaHuman',
		category: ['HCI'],
        skill:['Unreal','Azure'],
        url: '/PersonalWeb/projects/metaHuman',
        imgUrl:fabAR_svg,
    },
    {
        id: 4,
		title: 'VBike',
		category: ['VR','HCI'],
        skill:['Unity','GLSL/HLSL','UIUX','Arduino'],
        url: '/PersonalWeb/projects/vBike',
        imgUrl:vbike_svg,
    },
    {
        id: 5,
		title: 'Kuchipa',
		category: ['HCI'],
        skill:['Unity','Mediapipe','OpenCV'],
        url: '/PersonalWeb/projects/kuchipa',
        imgUrl:kuchipa_svg,
    },
    
    {
        id: 6,
		title: 'Kick',
		category: ['Product Design'],
        skill:['3D','Arduino'],
        url: '/PersonalWeb/projects/kick',
        imgUrl:kick_svg,
    },
];


export default projects;