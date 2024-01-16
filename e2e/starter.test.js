describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('add task view should be visible', async () => {
    await expect(element(by.id('add-task-view'))).toBeVisible();
  });
  
  it('user can add task', async () => {
    await element(by.id('task-text-input')).typeText("Test Input");
    await element(by.id('add-task-button')).tap();
    await expect(element(by.id('task-item'))).toHaveText("Test Input");
  });
//  it('should show hello screen after tap', async () => {
//    await element(by.id('hello_button')).tap();
//    await expect(element(by.text('Hello!!!'))).toBeVisible();
//  });
//
//  it('should show world screen after tap', async () => {
//    await element(by.id('world_button')).tap();
//    await expect(element(by.text('World!!!'))).toBeVisible();
//  });
});
