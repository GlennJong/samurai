import React from 'react';

export const Example = ({ ...props }) => {
  return (
    <svg width="" height="" viewBox=""  {...props}>
    </svg>
  )
}

export const DirectionArrow = ({ className='', deg=0 }) => {
  return (
    <svg className={className} width="14px" height="9px" viewBox="0 0 14 9"  transform={`rotate(${deg})`}>
      <polygon id="Path" fill="currentColor" fillRule="nonzero" points="11.9998932 -0.000106781186 13.4141068 1.41410678 6.707 8.12121356 -0.000106781186 1.41410678 1.41410678 -0.000106781186 6.707 5.292"></polygon>
    </svg>
  )
}

export const Arrow = ({ className='' }) => {
  return (
    <svg className={className} width="18px" height="14px" viewBox="0 0 18 14">
      <polygon id="Path" fill="currentColor" points="10.7071068 -0.000106781187 17.4142136 6.707 10.7071068 13.4141068 9.29289322 11.9998932 13.585 7.70689322 0 7.707 0 5.707 13.585 5.70689322 9.29289322 1.41410678"></polygon>
    </svg>
  )
}


export const Close = ({ className='' }) => {
  return (
    <svg className={className} width="19.092" height="19.092" viewBox="0 0 19.092 19.092">
      <g id="Group_4516" data-name="Group 4516" transform="translate(685.776 -43.958)">
        <rect id="Rectangle_1419" data-name="Rectangle 1419" width="24" height="3" transform="translate(-683.655 43.958) rotate(45)"/>
        <rect id="Rectangle_1420" data-name="Rectangle 1420" width="24" height="3" transform="translate(-685.776 60.929) rotate(-45)"/>
      </g>
    </svg>
  )
}

export const Plus = ({ className='' }) => {
  return (
    <svg className={className} width="12px" height="12px" viewBox="0 0 12 12" >
      <polygon id="Path" fill="currentColor" points="7 0 7 5 12 5 12 7 7 7 7 12 5 12 5 7 0 7 0 5 5 5 5 0"></polygon>
    </svg>
  )
}

export const Minus = ({ className=''}) => {
  return (
    <svg className={className} width="12px" height="12px" viewBox="0 0 12 12" >
      <polygon id="Path" fill="currentColor" points="12 5 12 7 0 7 0 5"></polygon>
    </svg>
  )
}

export const TripleDots = ({ className='' }) => {
  return (
    <svg className={className} width="15" height="3" viewBox="0 0 15 3">
      <circle id="Ellipse_45" data-name="Ellipse 45" cx="1.5" cy="1.5" r="1.5" fill="currentColor"/>
      <circle id="Ellipse_46" data-name="Ellipse 46" cx="1.5" cy="1.5" r="1.5" transform="translate(6)" fill="currentColor"/>
      <circle id="Ellipse_47" data-name="Ellipse 47" cx="1.5" cy="1.5" r="1.5" transform="translate(12)" fill="currentColor"/>
    </svg>
  )
}

export const MenuBurger = ({ className='' }) => {
  return (
    <svg className={className} width="24.17" height="14.08" viewBox="0 0 24.17 14.08">
      <g id="Group_4516" data-name="Group 4516" transform="translate(688.315 -41.964)">
        <rect id="Rectangle_1419" data-name="Rectangle 1419" width="24" height="3" transform="matrix(0.996, -0.087, 0.087, 0.996, -688.315, 44.056)"/>
        <rect id="Rectangle_1420" data-name="Rectangle 1420" width="24" height="3" transform="matrix(0.996, -0.087, 0.087, 0.996, -688.315, 53.056)"/>
      </g>
    </svg>
  )
}


export const Search = ({ className='' }) => {
  return (
    <svg className={className} width="20.314" height="20.314" viewBox="0 0 20.314 20.314">
      <path id="Path_16" data-name="Path 16" d="M11,2a9,9,0,1,1-9,9A9,9,0,0,1,11,2Zm0,16a7,7,0,1,0-7-7A7,7,0,0,0,11,18Zm8.485.071L22.314,20.9,20.9,22.314l-2.828-2.829,1.414-1.414Z" transform="translate(-2 -2)" fill="currentColor"/>
    </svg>
  )
}

export const Play = ({ className='' }) => {
  return (
    <svg className={className} width="200px" height="200px" viewBox="0 0 200 200">
      <path fill="currentColor" d="M100,0 C155.228475,0 200,44.771525 200,100 C200,155.228475 155.228475,200 100,200 C44.771525,200 0,155.228475 0,100 C0,44.771525 44.771525,0 100,0 Z M100,2 C45.8760945,2 2,45.8760945 2,100 C2,154.123905 45.8760945,198 100,198 C154.123905,198 198,154.123905 198,100 C198,45.8760945 154.123905,2 100,2 Z M65.0000269,44 L162.549008,100.25325 L65.0000269,156.5065 L65.0000269,44 Z M67.0000269,47.462059 L67.0000269,153.044441 L158.545445,100.25325 L67.0000269,47.462059 Z" id="Shape"></path>
    </svg>
  )
}

export const Reset = ({ className='' }) => {
  return (
    <svg className={className} width="13.251" height="13.251" viewBox="0 0 13.251 13.251">
      <path d="M12.957,13.639a6.614,6.614,0,1,1,1.1-1.211l-2.114-3.8h1.988A5.3,5.3,0,1,0,12.3,12.45Z" transform="translate(-2 -2)" fill="currentColor"/>
    </svg>

  )
}

export const Facebook = ({ className='' }) => {
  return (
    <svg className={className} width="6.563" height="13.5" viewBox="0 0 6.563 13.5">
      <path fill="currentColor" id="Path_8631" data-name="Path 8631" d="M11.375,9.763h1.563l.625-2.7H11.375V5.713c0-.7,0-1.35,1.25-1.35h.938V2.095A16.313,16.313,0,0,0,11.777,2c-1.7,0-2.9,1.118-2.9,3.173v1.89H7v2.7H8.875V15.5h2.5Z" transform="translate(-7 -2)"/>
    </svg>
  )
}

export const Line = ({ className='' }) => {
  return (
    <svg className={className} width="20" height="19.047" viewBox="0 0 20 19.047" >
      <path id="Path_8942" data-name="Path 8942" fill="currentColor" d="M18.663,10.84a.526.526,0,0,1-.526.525H16.675V12.3h1.462a.525.525,0,1,1,0,1.049H16.15a.526.526,0,0,1-.522-.524V8.852a.527.527,0,0,1,.525-.525h1.988a.525.525,0,1,1,0,1.05H16.676v.938h1.462a.526.526,0,0,1,.526.525Zm-4.1,2.485a.538.538,0,0,1-.166.025.515.515,0,0,1-.425-.208l-2.036-2.764v2.45a.525.525,0,0,1-1.047,0V8.852a.522.522,0,0,1,.52-.523.538.538,0,0,1,.412.211l2.052,2.775V8.852a.525.525,0,0,1,1.05,0v3.976a.524.524,0,0,1-.36.5Zm-4.95.027a.526.526,0,0,1-.523-.524V8.852a.525.525,0,1,1,1.049,0v3.976A.527.527,0,0,1,9.615,13.352Zm-1.53,0H6.1a.528.528,0,0,1-.525-.524V8.852a.527.527,0,0,1,1.05,0V12.3H8.087a.525.525,0,0,1,0,1.05ZM12,2.572c-5.513,0-10,3.643-10,8.118,0,4.01,3.558,7.369,8.363,8.007.325.068.769.215.881.492a2.037,2.037,0,0,1,.032.9l-.137.85c-.037.25-.2.988.874.537a32.23,32.23,0,0,0,7.864-5.812A7.191,7.191,0,0,0,22,10.69c0-4.475-4.488-8.118-10-8.118Z" transform="translate(-2 -2.572)"/>
    </svg>
  )
}

export const LinkIcon = ({ className='' }) => {
  return (
    <svg width="19.66" height="19.657" viewBox="0 0 19.66 19.657">
      <path id="Path_8944" data-name="Path 8944" fill="currentColor" d="M18.364,15.536,16.95,14.12l1.414-1.414a5,5,0,1,0-7.071-7.071L9.879,7.05,8.464,5.636,9.88,4.222a7,7,0,0,1,9.9,9.9l-1.415,1.414Zm-2.828,2.828-1.415,1.414a7,7,0,0,1-9.9-9.9L5.636,8.464,7.05,9.88,5.636,11.294a5,5,0,1,0,7.071,7.071l1.414-1.414,1.415,1.414ZM14.828,7.757l1.415,1.415-7.071,7.07L7.757,14.828l7.071-7.07Z" transform="translate(-2.171 -2.172)"/>
    </svg>
  )
}

export const Error = ({ className='' }) => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16">
      <path id="Path_35" data-name="Path 35" d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM9.1,12.2H6.9V10.3H9.2v1.9Zm.1-7.4L8.6,9.2H7.4L6.8,4.8v-1H9.3v1Z" fill="currentColor"/>
    </svg>
  )
}

export const Twitter = ({ ...props }) => {
  return (
    <svg width="30px" height="24px" viewBox="0 0 30 24" {...props}>
      <path fill="currentColor" d="M9.86401603,24.0081989 L8.57601603,24.0081989 C8.54017413,23.999313 8.50375057,23.992964 8.46701603,23.9891989 C7.70816399,23.9599138 6.95230501,23.8773774 6.20501603,23.7421989 C4.02845251,23.3570845 1.94710836,22.5539553 0.0760160329,21.3771989 C0.0450160329,21.3581989 -0.00098396711,21.3471989 0,21.2861989 C3.16052121,21.6410979 6.33511674,20.7524119 8.85201603,18.8081989 C8.78217126,18.7785545 8.70688044,18.7639052 8.63101603,18.7651989 C8.32978243,18.7527241 8.03042611,18.7115375 7.73701603,18.6421989 C5.67546026,18.2099596 3.9903839,16.7304913 3.29501603,14.7421989 C3.23501603,14.5851989 3.25301603,14.5651989 3.41601603,14.5921989 C4.21402292,14.7238764 5.03043142,14.6925807 5.81601603,14.5001989 C5.84401603,14.4931989 5.87801603,14.4941989 5.90101603,14.4581989 L5.83601603,14.4391989 C3.55042187,13.9370952 1.76661908,12.1497772 1.26901603,9.86319894 C1.16394097,9.44622911 1.11484304,9.01712663 1.12301603,8.58719894 C1.12301603,8.48719894 1.15401603,8.45419894 1.24701603,8.50819894 C1.27601603,8.52419894 1.30601603,8.53819894 1.33501603,8.55319894 C1.98366695,8.88446378 2.68771057,9.09360914 3.41201603,9.17019894 C3.53501603,9.18419894 3.65901603,9.18819894 3.78201603,9.19719894 C3.7584393,9.15272325 3.72405016,9.11489519 3.68201603,9.08719894 C3.08992444,8.66354083 2.58135914,8.13395484 2.18201603,7.52519894 C1.40997894,6.37150015 1.06187315,4.98579171 1.19701603,3.60419894 C1.26970011,2.79185527 1.50792442,2.00299246 1.89701603,1.28619894 C1.98901603,1.11319894 1.99701603,1.11319894 2.11601603,1.25919894 C2.64572043,1.89789372 3.22160165,2.49683693 3.83901603,3.05119894 C5.10228291,4.18732625 6.52628751,5.13082197 8.06501603,5.85119894 C9.25146181,6.40543146 10.4971498,6.82278559 11.778016,7.09519894 C12.6183594,7.27069573 13.4702142,7.38565769 14.327016,7.43919894 C14.453016,7.44819894 14.467016,7.43319894 14.437016,7.29519894 C14.3206312,6.74087944 14.2869328,6.17238615 14.337016,5.60819894 C14.4283947,4.18675955 15.0361982,2.84774257 16.046016,1.84319894 C17.3989376,0.417074683 19.3722224,-0.243310459 21.311016,0.0811989448 C22.5974431,0.26837226 23.7856479,0.876364571 24.690016,1.81019894 C24.749774,1.88326517 24.8471926,1.91390489 24.938016,1.88819894 C25.770123,1.71070507 26.581738,1.44798578 27.360016,1.10419894 C27.7486141,0.931394266 28.1281107,0.738808894 28.497016,0.527198945 C28.531016,0.508198945 28.570016,0.462198945 28.606016,0.493198945 C28.642016,0.524198945 28.601016,0.569198945 28.590016,0.607198945 C28.579016,0.645198945 28.564016,0.685198945 28.549016,0.724198945 C28.1001809,1.9248698 27.2823596,2.95239786 26.213016,3.65919894 C26.174016,3.68519894 26.123016,3.70119894 26.101016,3.75119894 C26.133016,3.78619894 26.172016,3.77019894 26.201016,3.76519894 C27.027623,3.64972918 27.8399883,3.44864866 28.625016,3.16519894 C28.900016,3.06519894 29.172016,2.95719894 29.446016,2.85319894 L29.446016,2.87819894 C29.415016,2.91619894 29.382016,2.95319894 29.354016,2.99419894 C28.943206,3.59587094 28.4804341,4.1603657 27.971016,4.68119894 C27.5303096,5.12779871 27.0551795,5.53906539 26.550016,5.91119894 C26.4779358,5.94592507 26.4334876,6.02026766 26.437016,6.10019894 C26.4617551,6.55319477 26.4617551,7.00720312 26.437016,7.46019894 C26.4049853,8.25198921 26.3154157,9.04040185 26.169016,9.81919894 C25.8203536,11.6965527 25.1752947,13.5064982 24.258016,15.1811989 C23.2149808,17.110958 21.8120494,18.8231251 20.125016,20.2251989 C19.0305757,21.1335306 17.8199082,21.8918792 16.525016,22.4801989 C14.6099104,23.3461683 12.5514426,23.851293 10.453016,23.9701989 C10.2559912,23.9674496 10.0590542,23.9801552 9.86401603,24.0081989 L9.86401603,24.0081989 Z"></path>
    </svg>
  )
}

export const Discord = ({ ...props }) => {
  return (
    <svg width="30px" height="24px" viewBox="0 0 30 24" {...props}>
      <path fill="currentColor" d="M5.365,4.42037961 C5.40932091,4.4159608 5.45155026,4.39934597 5.487,4.37237961 C6.57021955,3.80530632 7.68203729,3.2946245 8.818,2.84237961 C10.2117025,2.30538393 11.6620588,1.92895558 13.141,1.72037961 C13.8306745,1.62191544 14.5248999,1.55850062 15.221,1.53037961 C15.721,1.51137961 16.221,1.48137961 16.715,1.49337961 C17.475,1.51137961 18.234,1.54137961 18.992,1.61737961 C20.5456691,1.77049057 22.0758856,2.10613797 23.551,2.61737961 C24.3430987,2.89657615 25.1204418,3.21599107 25.88,3.57437961 C26.431,3.83037961 26.971,4.10937961 27.515,4.37937961 C27.5514118,4.4003941 27.5929828,4.41078686 27.635,4.40937961 C27.482,4.27337961 27.335,4.13437961 27.176,4.00337961 C26.71,3.61437961 26.24,3.22937961 25.737,2.88737961 C25.1476671,2.48647645 24.5262201,2.13494749 23.879,1.83637961 C22.8728248,1.38394197 21.826622,1.0263917 20.754,0.768379611 C20.627,0.736379611 20.624,0.729379611 20.682,0.611379611 C20.757,0.460379611 20.833,0.311379611 20.908,0.158379611 C20.983,0.00537961073 20.991,-0.00962038927 21.175,0.00937961073 C21.6858038,0.0618039133 22.1928047,0.146304057 22.693,0.262379611 C23.9302487,0.560867456 25.1257051,1.01164083 26.252,1.60437961 C27.00221,1.99103022 27.7222449,2.43361438 28.406,2.92837961 C28.463661,2.97005427 28.5128689,3.02231638 28.551,3.08237961 C28.9668025,3.7468224 29.3376325,4.43837027 29.661,5.15237961 C30.1897866,6.2962525 30.6479787,7.47145502 31.033,8.67137961 C31.4780093,10.0496815 31.8452543,11.4518897 32.133,12.8713796 C32.3363333,13.8633796 32.5063333,14.8607129 32.643,15.8633796 C32.7376667,16.5647129 32.8163333,17.2680463 32.879,17.9733796 C32.921,18.4467129 32.9573333,18.9207129 32.988,19.3953796 C32.9932103,19.4692074 32.9670721,19.5418135 32.916,19.5953796 C32.3563576,20.2236586 31.7341431,20.793268 31.059,21.2953796 C30.01842,22.059293 28.8733596,22.6695428 27.659,23.1073796 C26.6297512,23.4834321 25.563418,23.7489259 24.478,23.8993796 C24.1038933,23.9571233 23.7264334,23.9905268 23.348,23.9993796 C23.2802713,24.0052798 23.2145922,23.9743496 23.176,23.9183796 C22.813,23.4313796 22.448,22.9463796 22.084,22.4603796 C22.018,22.3723796 22.027,22.3553796 22.164,22.3063796 C22.8155079,22.0764627 23.4503527,21.8018088 24.064,21.4843796 C25.0445951,20.9786213 25.966205,20.3658916 26.812,19.6573796 C27.3705833,19.1859245 27.8952184,18.6756584 28.382,18.1303796 C28.3935359,18.1130972 28.4038928,18.0950563 28.413,18.0763796 L27.993,18.3763796 C26.4869185,19.4483116 24.8201607,20.2742646 23.055,20.8233796 C21.9734649,21.1600881 20.8645832,21.401673 19.741,21.5453796 C19.169,21.6193796 18.595,21.6683796 18.019,21.7083796 C17.18,21.7673796 16.34,21.7583796 15.501,21.7373796 C14.892,21.7223796 14.283,21.6663796 13.676,21.5963796 C12.2290749,21.43642 10.8039545,21.1188697 9.426,20.6493796 C8.28369271,20.2557071 7.18571429,19.7435853 6.15,19.1213796 C5.65133333,18.8220463 5.168,18.4997129 4.7,18.1543796 C4.67088737,18.1301344 4.63671973,18.1127089 4.6,18.1033796 C4.67,18.1833796 4.738,18.2653796 4.81,18.3433796 C5.5760422,19.1730852 6.43349503,19.9134601 7.366,20.5503796 C8.43400937,21.2764671 9.59036006,21.8632118 10.807,22.2963796 L10.85,22.3113796 C10.971,22.3573796 10.976,22.3723796 10.9,22.4743796 L10.165,23.4553796 C10.053,23.6053796 9.937,23.7553796 9.829,23.9063796 C9.78875137,23.970732 9.71554327,24.006755 9.64,23.9993796 C9.10823471,23.9786916 8.57858894,23.9205476 8.055,23.8253796 C6.81108941,23.6170107 5.59804773,23.2542067 4.444,22.7453796 C3.32912311,22.2579602 2.28881386,21.6152578 1.354,20.8363796 C0.902055303,20.4534851 0.475800776,20.0412609 0.078,19.6023796 C0.0252811453,19.5496782 -0.00206670967,19.4767506 0.003,19.4023796 C0.028,19.0473796 0.045,18.6923796 0.077,18.3373796 C0.121,17.8523796 0.177,17.3693796 0.225,16.8843796 C0.284,16.2913796 0.369,15.7013796 0.457,15.1123796 C0.667023072,13.7144782 0.947378815,12.3280523 1.297,10.9583796 C1.72430591,9.26330657 2.27990809,7.60318597 2.959,5.99237961 C3.35446573,5.05629884 3.80870468,4.14615094 4.319,3.26737961 C4.49556115,3.0067248 4.73000037,2.79042467 5.004,2.63537961 C6.00871946,1.95026457 7.08713058,1.38003163 8.219,0.935379611 C9.31210344,0.49393548 10.4569825,0.193518138 11.626,0.0413796107 C12.075,-0.0136203893 11.956,-0.0796203893 12.163,0.321379611 C12.213,0.421379611 12.263,0.515379611 12.309,0.613379611 C12.368,0.732379611 12.364,0.741379611 12.238,0.769379611 C11.733,0.884379611 11.238,1.02537961 10.744,1.18837961 C9.30298337,1.66496785 7.94850512,2.37141724 6.733,3.28037961 C6.276,3.62137961 5.841,3.98837961 5.41,4.36237961 C5.391,4.37337961 5.365,4.38637961 5.365,4.42037961 Z M9.002,13.4983796 C8.99715398,13.7613486 9.02810443,14.0237545 9.094,14.2783796 C9.2577837,15.0963249 9.77409047,15.8003463 10.505,16.2023796 C11.2517599,16.6400845 12.184924,16.6033826 12.895,16.1083796 C13.800544,15.5122265 14.3139845,14.4738761 14.238,13.3923796 C14.2330085,12.9712397 14.1414445,12.5556278 13.969,12.1713796 C13.7182937,11.5487562 13.2469258,11.0403625 12.645,10.7433796 C11.636034,10.2571011 10.4245607,10.5397782 9.735,11.4223796 C9.25235542,12.0056412 8.99257928,12.7413782 9.002,13.4983796 Z M23.991,13.5113796 C23.994309,13.2148843 23.9562764,12.9193747 23.878,12.6333796 C23.6981431,11.8711594 23.2133834,11.2161373 22.537,10.8213796 C21.5172926,10.2378452 20.2240945,10.48832 19.496,11.4103796 C18.9507177,12.0580896 18.6877816,12.8973239 18.766,13.7403796 C18.8010894,14.5209657 19.1355925,15.2580185 19.7,15.7983796 C20.1869723,16.2915388 20.8686393,16.5416179 21.559,16.4803796 C22.1643473,16.4358163 22.7293594,16.1601133 23.137,15.7103796 C23.6955702,15.1155518 24.001699,14.3272879 23.991,13.5113796 L23.991,13.5113796 Z"></path>
    </svg>
  )
}

export const Medium = ({ ...props }) => {
  return (
    <svg width="30px" height="24px" viewBox="0 0 30 24" {...props}>
      <path fill="currentColor" d="M0,15.8873796 L0,15.0923796 C0.0343146987,14.8496001 0.050027107,14.6045534 0.047,14.3593796 C0.215797658,11.9106594 1.03157646,9.55062931 2.411,7.52037961 C5.38663449,2.87511119 10.776561,0.36518804 16.247,1.07737961 C18.6949784,1.30381956 21.0303982,2.21221162 22.988,3.69937961 C27.1609356,6.62564204 29.4548403,11.5565649 29.005,16.6333796 C28.8580972,19.0855607 28.0441353,21.4510293 26.651,23.4743796 C24.4348289,26.8767255 20.8827713,29.1827657 16.873,29.8223796 C16.229,29.9363796 15.578,29.9603796 14.931,30.0223796 L14.136,30.0223796 C13.694,29.9863796 13.251,29.9653796 12.811,29.9113796 C10.5565446,29.6538547 8.39747826,28.8562968 6.517,27.5863796 C3.1317898,25.3674945 0.838726806,21.824429 0.201,17.8273796 C0.088,17.1843796 0.061,16.5343796 0,15.8873796 L0,15.8873796 Z M15.941,15.5123796 C15.9569793,13.8184426 15.2977822,12.1878651 14.1090698,10.9809514 C12.9203573,9.77403763 11.2999843,9.09014079 9.606,9.08029761 C7.90438133,9.07174283 6.27033417,9.74567451 5.06953836,10.9513569 C3.86874255,12.1570394 3.20145265,13.79381 3.217,15.4953796 C3.20448514,17.1866968 3.86691479,18.8131856 5.05752782,20.0144978 C6.24814085,21.21581 7.86863854,21.8927636 9.56,21.8953929 C11.2538438,21.8988411 12.8792942,21.2274279 14.0769313,20.0296032 C15.2745684,18.8317784 15.9457269,17.2062229 15.9420154,15.5123796 L15.941,15.5123796 Z M22.977,15.6783796 C22.9954971,14.6907258 22.8784053,13.7052035 22.629,12.7493796 C22.411096,11.7649037 21.9351448,10.8561441 21.25,10.1163796 C20.8905825,9.69961594 20.3681155,9.45916887 19.81778,9.45723909 C19.2674445,9.45533244 18.743314,9.69213157 18.381,10.1063796 C17.9740839,10.504144 17.6522388,10.9804475 17.435,11.5063796 C16.4713087,13.8056656 16.3704555,16.375645 17.151,18.7433796 C17.3736304,19.5405118 17.7931646,20.2688508 18.371,20.8613796 C18.7332957,21.2827246 19.2618881,21.5243468 19.8175739,21.5226249 C20.3732598,21.5208846 20.9003365,21.2759737 21.26,20.8523796 C21.707859,20.387947 22.0574907,19.8379913 22.288,19.2353796 C22.7402008,18.1038194 22.9743148,16.8969446 22.978,15.6783796 L22.977,15.6783796 Z M23.677,15.6373796 C23.6587554,16.8373528 23.7592446,18.0361885 23.977,19.2163796 C24.0459686,19.7055825 24.1988811,20.1792052 24.429,20.6163796 C24.629,20.9643796 24.882,20.9613796 25.094,20.6163796 C25.2123255,20.4110639 25.3024686,20.1907515 25.362,19.9613796 C25.5818961,19.139168 25.7185832,18.2969339 25.77,17.4473796 C25.9298216,15.6088017 25.8626496,13.7575399 25.57,11.9353796 C25.5062707,11.3789736 25.3365456,10.8399266 25.07,10.3473796 C24.879,10.0303796 24.63,10.0343796 24.435,10.3473796 C24.2682887,10.6344393 24.1487665,10.9464125 24.081,11.2713796 C23.770619,12.7067134 23.6366278,14.1745714 23.682,15.6423796 L23.677,15.6373796 Z"></path>
    </svg>
  )
}