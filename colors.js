//All attributes off(color at startup)
const resetAllColors='\x1b[0m'; 

const color = {    
    end     :'\x1b[39m'	//end all previous colors, return to color at terminal startup

    black   :'\x1b[30m',
    white   :'\x1b[37m',

    red     :'\x1b[91m',
    green   :'\x1b[92m',
    blue    :'\x1b[94m',
    
    cyan    :'\x1b[96m',
    magenta :'\x1b[95m',
    yellow  :'\x1b[93m',
    
    lightGray   :'\x1b[90m',
    lightWhite  :'\x1b[97m',

    lightRed    :'\x1b[91m',
    lightGreen  :'\x1b[92m',
    lightBlue   :'\x1b[94m',
    
    lightCyan   :'\x1b[96m',
    lightMagenta:'\x1b[95m',
    lightYellow :'\x1b[93m',    
}

const background={
    end     :'\x1b[49m',

    black   :'\x1b[01m',
    White   :'\x1b[47m',

    red     :'\x1b[41m',
    blue    :'\x1b[44m',
    green   :'\x1b[42m',
    
    cyan    :'\x1b[46m',
    magenta :'\x1b[45m',
    yellow  :'\x1b[43m',   

    lightGray   :'\x1b100m',
    lightWhite  :'\x1b107m',

    lightRed    :'\x1b101m',
    lightGreen  :'\x1b102m',
    lightBlue   :'\x1b104m',
    
    lightCyan   :'\x1b106m',
    lightMagenta:'\x1b105m',
    lightYellow :'\x1b103m',
}

const style={
    boldOn      :'\x1b[1m',
    boldOff     :'\x1b[21m',
    
    underlineOff:'\x1b[24m',
    underlineOn :'\x1b[4m',
    
    blinkOn     :'\x1b[5m',
    blinkOff    :'\x1b[25m',
}
  
export {
    colors as default,
    resetAllColors,
    color,
    background,
    style
};