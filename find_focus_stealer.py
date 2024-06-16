# https://apple.stackexchange.com/questions/123730/is-there-a-way-to-detect-what-program-is-stealing-focus-on-my-mac
#!/usr/bin/python

from AppKit import NSWorkspace

from datetime import datetime
from time import sleep

last_active_name = None
known_apps = ['Google Chrome', 'Telegram', 'iTerm2', 'Steam', 'Steam Helper', 'Dota 2', 'Finder', 'Preview']
while True:
    active_app = NSWorkspace.sharedWorkspace().activeApplication()
    if active_app['NSApplicationName'] != last_active_name and active_app['NSApplicationName'] not in known_apps:
        last_active_name = active_app['NSApplicationName']
        print('%s: %s [%s]' % (
            datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            active_app['NSApplicationName'],
            active_app['NSApplicationPath']
        ))
    sleep(1)
