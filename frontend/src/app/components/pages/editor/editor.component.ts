import { Component, OnInit } from '@angular/core';
import { WerckService } from 'src/app/services/werck.service';
import { Router } from '@angular/router';
import { ATutorial } from '../tutorial/ATutorial';
import { IFile } from 'src/shared/io/file';

const snippet = 
  `
  tempo: 60;
  device: MyDevice  midi 0;
  instrumentDef:piano  MyDevice  0 0 0;
  [
  instrument: piano;
  {
    b   f#'32 x c#' b a'8~   x16  c''\`g' e'8  e'16 a'8 f#'16  |  
    (g'16 c'' f')8  a'  (e'16 r d')8  c''~  (x c''\`a' g' f'  d' )2  |
    c#'8.  d'32 g' e'2.      |  
    c'32 e' d' f'   e' g f' d'  (a'16 c'' e')8 (e'32 f' e' d' a)8  (bb32 c'x d'x e' f')4 (a'32 gx d' fx e)4 |
    b2 ((b c#'x b d')  (f' ax bb c')  (e' a' bb' f' c' g))2 |  
    a4~ x16 a'8.~ x8 x~ x8. a16~ | x4 b'~ x16 c#'8.~ x8 e'~ |
    x8. c#'16~ x4 ((b c'x a d') (eb' gx a f) (e gx fx d'))2 | 
    c#'1~ | 
    x4  b8~ x32 a g# d'  (e b a)8 (c#' ax b g#)8 (r c#' f# b g#)4 |
    (g#' f#' c#' e' f#)4 (g#' f#' c#' e' f#~)4 f#2~ | 
    x2   g#'32 a' g#'16  x32 a' g#'16   x b32 a' f#' c#' b' f#' | 
    g#'32 e'x c#'   f#' g#'x b'   a' g#'x b'   f#' f#x b   c a b e' g#'   f# b c' d' a' f#' e' f#' g#' e' b |
    r8 f#'32 g#' e' b  r4  f#'32 g#' e' b  r4  f#'32 g#' e' b | 
    ( a'4   a'\` g#'8 f#'  (e''4 f#' x8 b' g#')4  c#'16 b'x a'  (g#' a' f#' e'x)4  )1 |
    f#'4    f#32 bx a b8~  x16 c#\`b  f#8~  x16  g#8  b,16 | 
    (c32 bb f)8  eb'8  (db'16 r bb)8  c'8~ (c'8  eb'\`ab db' gb' bb)2 | 
    eb'8.    db'32 f' c'2. | 
    c'32 e' d' f'  e' g' f' d'   (a' c'' e')8 (e' f' e' d' a)8  (bb c'x d' x e' f')4 (a' gx d' fx e)4 |
    b2 ((b c#'x b d')  (f' ax bb c')  (e' a' bb' f' c' g))2 |  
    a4~ x16 a'8.~ x8 x~ x8. a16~ | x4 b'~ x16 c#'8.~ x8 e'~ |
    x8. c#'16~ x4 ((b c'x a d') (eb' gx a f) (e gx fx bb))2 |  
    b1~ | 
    x4  a8~ x32 g f# c'  (d a g)8 (b gx a f#)8 (r b e a f#)4 |
    (f#' e' b  d' e)4 (f#' e' b  d' e~)4 e2 | 
    r8  (r f# g c' b)8  (f#' g' e' a' f#')8 g'32 f#'x e'  (d'' a'x b' c'' e'' b'x c'' d a')4 (b' e'x g'x  d'' f#'x  a' e' b)4 |
    (a' c'x)2 g'2   |
    ((r eb' bb' ab' e') (e' g' eb' bb ab') (c'' bb'x ab'x f'))2  (bb' gb'x ab' f' db'x eb' b ab' f')4 (f' eb' gb' e' db' eb' ab' db' gb' f eb)4 |
    c'1 |
  }
  ]   
  `
  ;


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent extends ATutorial implements OnInit {

	files: IFile[] = [];
	constructor(werck: WerckService, route: Router) {
		super(route, werck);
	}

	async ngOnInit() {
    const text = this.prepareSnippet(snippet);
    const file = await this.werck.createSnippetFile(text, 'blackpages.sheet');
    this.files.push(file);
	}

}
