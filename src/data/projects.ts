// Projects data.
// Note: Here we are getting data from a ts file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
    {
        id: 1,
		title: 'FabAR',
		category: ['MR'],
        skill:['Unity','Hololens','MRTK'],
        url: '/PersonalWeb/projects/fabAR',
    },
    {
        id: 2,
		title: 'Doddle',
		category: ['HCI','AI'],
        skill:['Unity','Stable Diffusion','UIUX'],
        url: '/PersonalWeb/projects/doddle',
    },
    {
        id: 3,
		title: 'MetaHuman',
		category: ['HCI'],
        skill:['Unreal','Azure'],
        url: '/PersonalWeb/projects/metaHuman',
    },
    {
        id: 4,
		title: 'VBike',
		category: ['VR','HCI'],
        skill:['Unity','GLSL/HLSL','UIUX','Arduino'],
        url: '/PersonalWeb/projects/vBike',
    },
    {
        id: 5,
		title: 'Kuchipa',
		category: ['HCI'],
        skill:['Unity','Mediapipe','OpenCV'],
        url: '/PersonalWeb/projects/kuchipa',
    },
    
    {
        id: 6,
		title: 'Kick',
		category: ['Product Design'],
        skill:['3D','Arduino'],
        url: '/PersonalWeb/projects/kick',
    },
];


export default projects;