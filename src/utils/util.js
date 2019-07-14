/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
    const event = document.createEvent('HTMLEvents')
    event.initEvent('resize', true, true)
    event.eventType = 'message'
    window.dispatchEvent(event)
}