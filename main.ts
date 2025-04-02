input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # .
        . . # # #
        . . . # .
        . . . # .
        . # . # .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    50
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1, quest_Time_Units_Enum.Seconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        . # . # .
        . # . # .
        . # . # .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    50,
    50
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1, quest_Time_Units_Enum.Seconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        . # . . .
        . # . # .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    50,
    0
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1, quest_Time_Units_Enum.Seconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0
    )
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (true) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        50,
        50,
        quest_Turn_Duration_Enum.msec_3000,
        quest_Debug_Show_Enum.Off
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    }
    if (true) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        -50,
        -50,
        quest_Turn_Duration_Enum.msec_3000,
        quest_Debug_Show_Enum.Off
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    }
    if (true) {
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        50,
        -50,
        quest_Turn_Duration_Enum.msec_3000,
        quest_Debug_Show_Enum.Off
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    }
    if (true) {
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        -50,
        50,
        quest_Turn_Duration_Enum.msec_3000,
        quest_Debug_Show_Enum.Off
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    }
    if (true) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        quest_Motors.quest_Set_Turn_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        quest_Turn_Type_Enum.Pivot,
        quest_Turn_Direction_Enum.right,
        quest_Turn_Power_Enum.Lo,
        quest_Turn_Duration_Enum.msec_3000,
        quest_Debug_Show_Enum.Off
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    }
    if (true) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        quest_Motors.quest_Set_Turn_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        quest_Turn_Type_Enum.Pivot,
        quest_Turn_Direction_Enum.left,
        quest_Turn_Power_Enum.Lo,
        quest_Turn_Duration_Enum.msec_3000,
        quest_Debug_Show_Enum.Off
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    }
})
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"2-Sequence Animation Validates New-Start"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Teacher:"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"micro:bit's LED Display is upside-down on bot"
)
display.rotateTo(display.Direction.UpsideDown)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Student:"
)
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Ver 0.4.3: 25-0401-1930"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2025 Quest Institute. All rights reserved."
    )
})
