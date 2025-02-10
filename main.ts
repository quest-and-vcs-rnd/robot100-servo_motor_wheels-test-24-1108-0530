function setup_Staff_ThisLessonOnly_Func () {
	
}
function setup_System_AnyLessonAlways_Func () {
	
}
function setup_Student_ThisLessonOnly_Func () {
	
}
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
function pre_setup_System_AnyLessonAlways_Func () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Fix 'show leds' Block's Orientation for Driving"
    )
    display.rotateTo(display.Direction.UpsideDown)
}
pre_setup_System_AnyLessonAlways_Func()
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"2-Sequence Animation Validates New-Start"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
setup_Staff_ThisLessonOnly_Func()
setup_System_AnyLessonAlways_Func()
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"©️ 2025 Quest Institute. All rights reserved."
)
quest_Note_2.quest_Show_String_For_Note_Big_Func(
"Student Setup-Code Can Start Below.."
)
