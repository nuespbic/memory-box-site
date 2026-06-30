export type DemoNotification = {
  id: string;
  app?: string;
  title: string;
  subtitle?: string;
};

export const DEMO_NOTIFICATION: DemoNotification = {
  id: "initial",
  app: "Memory Box",
  title: "契約更新まであと30日です",
};

/** Hero が見えてから、通知が現れるまで */
export const INITIAL_DELAY_MS = 2800;

/** 通知を表示してから消えるまで */
export const VISIBLE_DURATION_MS = 3000;
