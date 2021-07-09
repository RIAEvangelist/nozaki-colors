import {color,background,style,resetAllColors} from '../colors.js';

//basic

console.log(`

    ${color.magenta}nozaki${color.end}-${color.cyan}color${resetAllColors}

`);


//cascading
console.log(
    `${background.black}

    ${color.yellow}::::    :::  :::::::: :::::::::     :::     :::    ::: ::::::::::: 
    ${color.lightYellow}:+:+:   :+: :+:    :+:     :+:    :+: :+:   :+:   :+:      :+:     
    ${color.lightGreen}:+:+:+  +:+ +:+    +:+    +:+    +:+   +:+  +:+  +:+       +:+     
    ${color.green}+#+ +:+ +#+ +#+    +:+   +#+    +#++:++#++: +#++:++        +#+     
    ${color.blue}+#+  +#+#+# +#+    +#+  +#+     +#+     +#+ +#+  +#+       +#+     
    ${color.lightBlue}#+#   #+#+# #+#    #+# #+#      #+#     #+# #+#   #+#      #+#     
    ${color.lightMagenta}###    ####  ######## ######### ###     ### ###    ### ###########

    ${resetAllColors}`
)

//bold

console.log(`

Bold may not work on all systems.
    ${style.boldOn}${color.magenta}noz${style.boldOff}aki${color.end}-${color.cyan}co${style.boldOn}lor${resetAllColors}

`);

//underline

console.log(`${background.yellow}

Visit nozaki's website!
    ${style.underlineOn}${color.blue}http://nozaki.ninja${color.end}

${resetAllColors}`);


//cascading
console.log(
    `${background.black}${style.blinkOn}

    ${color.yellow}::::    :::  :::::::: :::::::::     :::     :::    ::: ::::::::::: 
    ${color.lightYellow}:+:+:   :+: :+:    :+:     :+:    :+: :+:   :+:   :+:      :+:     
    ${color.lightGreen}:+:+:+  +:+ +:+    +:+    +:+    +:+   +:+  +:+  +:+       +:+     
    ${color.green}+#+ +:+ +#+ +#+    +:+   +#+    +#++:++#++: +#++:++        +#+     
    ${color.blue}+#+  +#+#+# +#+    +#+  +#+     +#+     +#+ +#+  +#+       +#+     
    ${color.lightBlue}#+#   #+#+# #+#    #+# #+#      #+#     #+# #+#   #+#      #+#     
    ${color.lightMagenta}###    ####  ######## ######### ###     ### ###    ### ###########

    ${resetAllColors}`
)