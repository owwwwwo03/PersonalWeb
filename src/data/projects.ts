// Projects data.
// Note: Here we are getting data from a ts file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
    {
        id: 1,
		title: 'FabAR',
		category: ['MR'],
        skill:['Unity','Hololens','MRTK'],
        url: '/projects/fabAR',
    },
    {
        id: 2,
		title: 'Doddle',
		category: ['HCI','AI'],
        skill:['Unity','Stable Diffusion','UIUX'],
        url: '/projects/doddle',
    },
    {
        id: 3,
		title: 'MetaHuman',
		category: ['HCI'],
        skill:['Web','Unreal','Azure'],
        url: '/projects/metaHuman',
    },
    {
        id: 4,
		title: 'VBike',
		category: ['VR'],
        skill:['Unity','GLSL/HLSL','HCI','UIUX','Arduino'],
        url: '/projects/vBike',
    },
    {
        id: 5,
		title: 'Kuchipa',
		category: ['HCI'],
        skill:['Unity','Mediapipe','OpenCV'],
        url: '/projects/kuchipa',
    },
    
    {
        id: 6,
		title: 'Kick',
		category: ['Product Design'],
        skill:['3D','Arduino'],
        url: '/projects/kick',
    },
];


export default projects;