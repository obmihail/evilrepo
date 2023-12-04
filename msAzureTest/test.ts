#!/usr/bin/node
import writeFileSync from 'fs';

writeFileSync('/tmp/evil.ts.result' ,'TS EXECUTED', { flag: 'w' })