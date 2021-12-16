/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import type {EditorThemeClasses} from 'outline';

import baseTheme from './PlaygroundEditorTheme';
import stylex from 'stylex';

const styles = stylex.create({
  paragraph: {
    margin: 0,
    position: 'relative',
  },
});

const theme: EditorThemeClasses = {
  ...baseTheme,
  paragraph: stylex(styles.paragraph),
};

export default theme;
