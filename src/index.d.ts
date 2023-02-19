export interface SettingPage {
  title: string;
  action: ActionButton[];
  config: AppConfig;
}

interface AppConfig {
  checkStatusInterval: 1500
}

interface ActionButton {
  type: "button";
  label: string;
  id: string;
  disable?: {
    selectorPin: number;
    selectorState: boolean
  };
  steps: ActionableStep[];
}

type ActionableStep = StepPin | StepSleep;

interface StepPin {
  type: "pin";
  pin: number;
  mode: "on" | "off" | "toggle";
}

interface StepSleep {
  type: "sleep";
  wait: number;
}


