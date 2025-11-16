import { PinchButton } from "SpectaclesInteractionKit.lspkg/Components/UI/PinchButton/PinchButton";

@component
export class ShowUIOnPinch extends BaseScriptComponent {

 @input("SceneObject")
    uiPanel: SceneObject;
    
    onAwake() {
        this.createEvent("OnStartEvent").bind(() => this.onStart());
        
    }

    private onStart() {
    


    }

    private onPinched() {
        // show UI panel
        if (this.uiPanel) {
            this.uiPanel.enabled = true;
            print("UI panel shown");
        } else {
            print("EggHideOnPinch: No UI panel assigned");
        }

        print("Egg was pinched → now shown");
    }
}