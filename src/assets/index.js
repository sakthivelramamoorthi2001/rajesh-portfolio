import awetomeProjectImage from "./awetome/project.png";
import ErpProjectImage from "./Erpone/project.png";
import getDietyProjectImage from "./getDiety/project.png";
import vee2CareProjectImage from "./vee2care/project.png";
import tnulmProjectImage from "./tnulm/project.png";
import hevanlyProjectImage from "./hevenly/project.png";
import bioDimeProjectImage from "./bigDime/project.png";
import limeProjectImage from "./limes/project.png";

//live

import liveProjectImageOneGold from "./onegold/liveProject.png";
import liveProjectImageApmex from "./apmex/liveProject.png";
import liveProjectImageSurgtest from "./surgtest/liveProject.png";
import liveProjectImageLimes from "./limes/liveProject.png";

//projectMainImage.png

import awetomeprojectMainImage from "./awetome/projectMainImage.png";
import ErpprojectMainImage from "./Erpone/projectMainImage.png";
import getDietyprojectMainImage from "./getDiety/projectMainImage.png";
import vee2CareprojectMainImage from "./vee2care/projectMainImage.png";
import tnulmprojectMainImage from "./tnulm/projectMainImage.png";
import hevanlyprojectMainImage from "./hevenly/projectMainImage.png";
import bioDimeprojectMainImage from "./bigDime/projectMainImage.png";
import OneGoldprojectMainImage from "./onegold/projectMainImage.png";
import ApmexprojectMainImage from "./apmex/projectMainImage.png";
import SurgtestprojectMainImage from "./surgtest/projectMainImage.png";
import LimesprojectMainImage from "./limes/projectMainImage.png";
import VitteprojectMainImage from "./vitte/projectMainImage.png";


//top main image
import oneGoldMainTopImage from "./onegold/topMain.png";
import apmexMainTopImage from "./apmex/topMain.png";
import surgtestMainTopImage from "./surgtest/topMain.png";
import vitteMainTopImage from "./vitte/topMain.png";

//icon
import iconOneGold from "./onegold/ProjectIcon.png";
import iconOneApmex from "./apmex/ProjectIcon.png";
import iconOneLimes from "./limes/ProjectIcon.png";
import iconSurgtes from "./surgtest/ProjectIcon.png";
import iconTnulm from "./tnulm/ProjectIcon.png";
// import iconVitte from './vitte/ProjectIcon.png';
import iconHdfc from "./hdfc/ProjectIcon.png";
// import iconNews from './hdfc'


//video 
import vitteVideo from '../assets/vitte/projectVideo.mp4'
import surgtestVideo from '../assets/surgtest/projectVideo.mp4'
import onegoldVideo from '../assets/onegold/projectVideo.mp4'
import apmexVideo from '../assets/apmex/projectVideo.mp4'


import dummyImagg from "./dummyImage.png";

const asset = {
  awetome: {
    projectimage: awetomeProjectImage,
    projectTopMainImage: dummyImagg,
    projectMainImage: awetomeprojectMainImage,
    iconOfProject: dummyImagg,
  },
  erpOne: {
    projectimage: ErpProjectImage,
    projectTopMainImage: dummyImagg,
    projectMainImage: ErpprojectMainImage,
    iconOfProject: dummyImagg,
  },
  getDiety: {
    projectimage: getDietyProjectImage,
    projectTopMainImage: dummyImagg,
    projectMainImage: getDietyprojectMainImage,
    iconOfProject: dummyImagg,
  },
  vee2care: {
    projectimage: vee2CareProjectImage,
    projectTopMainImage: dummyImagg,
    projectMainImage: vee2CareprojectMainImage,
    iconOfProject: dummyImagg,
  },
  tnulm: {
    projectTopMainImage: dummyImagg,
    projectMainImage: tnulmprojectMainImage,
    projectimage: tnulmProjectImage,
    iconOfProject: iconTnulm,
  },
  hevanly: {
    projectTopMainImage: dummyImagg,
    projectMainImage: hevanlyprojectMainImage,
    projectimage: hevanlyProjectImage,
    iconOfProject: dummyImagg,
  },
  bioDime: {
    projectTopMainImage: dummyImagg,
    projectMainImage: bioDimeprojectMainImage,
    projectimage: bioDimeProjectImage,
    iconOfProject: dummyImagg,
  },
  oneGolde: {
    liveProjectImage: liveProjectImageOneGold,
    projectTopMainImage: oneGoldMainTopImage,
    projectMainImage: OneGoldprojectMainImage,
    iconOfProject: iconOneGold,
    video:onegoldVideo,
  },
  apmex: {
    liveProjectImage: liveProjectImageApmex,
    projectTopMainImage: apmexMainTopImage,
    projectMainImage: ApmexprojectMainImage,
    iconOfProject: iconOneApmex,
    video:apmexVideo,

  },
  surgtest: {
    liveProjectImage: liveProjectImageSurgtest,
    projectTopMainImage: surgtestMainTopImage,
    projectMainImage: SurgtestprojectMainImage,
    iconOfProject: iconSurgtes,
    video:surgtestVideo,
  },
  limes: {
    liveProjectImage: liveProjectImageLimes,
    projectTopMainImage: dummyImagg,
    projectMainImage: LimesprojectMainImage,
    iconOfProject: iconOneLimes,
    projectimage: limeProjectImage,
  },
  yoloWorks: {
    liveProjectImage: dummyImagg,
    projectTopMainImage: dummyImagg,
    projectMainImage: dummyImagg,
    iconOfProject: dummyImagg,
  },
  vitte: {
    liveProjectImage: dummyImagg,
    projectTopMainImage: vitteMainTopImage,
    projectMainImage: VitteprojectMainImage,
    iconOfProject: dummyImagg,
    video:vitteVideo
  },
};


export default asset;
