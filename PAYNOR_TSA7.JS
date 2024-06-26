function resetAll() {
    let resetting = document.getElementById("flex-container");
    resetting.style.gap = "initial";
    resetting.style.flexDirection = "row";
    resetting.style.justifyContent = "flex-start";
    resetting.style.alignItems = "stretch";

    document.getElementById("gp").value = "0";
    document.getElementById("ba").value = "0";
    document.getElementById("bb").value = "0";
    document.getElementById("bc").value = "0";

    let b1 = document.getElementById("box1");
    let b2 = document.getElementById("box2");
    let b3 = document.getElementById("box3");

    b1.style.flexGrow = "0";
    b2.style.flexGrow = "0";
    b3.style.flexGrow = "0";
}

function gapAdjustment() {
    let a = document.getElementById("num").value;
    let b = document.getElementById("flex-container");
    b.style.gap = `${a}px`;
    console.log(`SETTING OF GAP: ${b.style.gap}`);
}

function RowAndCol(b) {
    let direct = document.getElementById("flex-container");
    if (b == `ROW`) {
        direct.style.flexDirection = "row";
    } else if (b == `COLUMN`) {
        direct.style.flexDirection = "column";
    }
    console.log(`CHANGING FLEX DIRECTION: ${direct.style.flexDirection}`);
}

function justifyCont(b) {
    let justify = document.getElementById("flex-container");
    if (b == 'START') {
        justify.style.justifyContent = "start";
    } else if (b == 'CENTER') {
        justify.style.justifyContent = "center";
    } else if (b == 'END') {
        justify.style.justifyContent = "end";
    } else if (b == 'SPACE-BETWEEN') {
        justify.style.justifyContent = "space-between";
    } else if (b == 'SPACE-AROUND') {
        justify.style.justifyContent = "space-around";
    } else if (b == 'SPACE-EVENLY') {
        justify.style.justifyContent = "space-evenly";
    }
    console.log(`JUSTIFYING CONTENT: ${justify.style.justifyContent}`);
}

function alignItm(b) {
    let align = document.getElementById("flex-container");
    if (b == 'ALIGN-START') {
        align.style.alignItems = "start";
    } else if (b == 'ALIGN-CENTER') {
        align.style.alignItems = "center";
    } else if (b == 'ALIGN-END') {
        align.style.alignItems = "end";
    }
    console.log(`ALIGNING ITEMS: ${align.style.alignItems}`);
}

function Flex(b) {
    let ba = document.getElementById("ba").value;
    let bb = document.getElementById("bb").value;
    let bc = document.getElementById("bc").value;
    let b1 = document.getElementById("box1");
    let b2 = document.getElementById("box2");
    let b3 = document.getElementById("box3");
    if (b == 'GROW_B1') {
        b1.style.flexGrow = ba;
    } else if (b == 'GROW_B2') {
        b2.style.flexGrow = bb;
    } else if (b == 'GROW_B3') {
        b3.style.flexGrow = bc;
    } else if (b == 'RESET') {
        document.getElementById("box1").style.flexGrow = '0';
        document.getElementById("box2").style.flexGrow = '0';
        document.getElementById("box3").style.flexGrow = '0';
    } else if (b == 'GROW-ALL') {
        b1.style.flexGrow = ba;
        b2.style.flexGrow = bb;
        b3.style.flexGrow = bc;
    }
    console.log(`FLEX GROW FOR BOX 1: ${b1.style.flexGrow}`);
    console.log(`FLEX GROW FOR BOX 2: ${b2.style.flexGrow}`);
    console.log(`FLEX GROW FOR BOX 3: ${b3.style.flexGrow}`);
}
