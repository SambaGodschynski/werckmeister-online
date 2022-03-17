import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { AnchorScrollSpy } from 'src/shared/VanillaJs';
import { IListOfContentsEntry } from '../../partials/list-of-contents/list-of-contents.component';

@Component({
  selector: 'app-manual-page',
  templateUrl: './manual-page.component.html',
  styleUrls: ['./manual-page.component.scss']
})
export class ManualPageComponent implements OnInit, AfterViewInit, OnDestroy {

	scrollSpy: AnchorScrollSpy;
	toc: IListOfContentsEntry[] = [];
	constructor(private elRef: ElementRef<HTMLLinkElement>) {
	}
	ngOnDestroy(): void {
		this.scrollSpy.unbind();
	}

	ngOnInit() {
	}

	private getHLevel(el: Element): number {
		switch(el.nodeName) {
			case 'H1': return 0;
			case 'H2': return 1;
			case 'H3': return 2;
			case 'H4': return 3;
			case 'H5': return 4;
			case 'H6': return 5;
			default: return 0;
		}
	}


	ngAfterViewInit() {
		this.scrollSpy = new AnchorScrollSpy(this.elRef.nativeElement);
		this.toc = this.scrollSpy
			.headings
			.map(x => ({
				title: x.textContent,
				level: this.getHLevel(x),
				anchorId: x.getAttribute('id')
			}))
			.filter(x => x.level <= 2);
		this.scrollSpy.onScrolledToAnchor = this.onScrolledToAnchor.bind(this);
	}

	onScrolledToAnchor(anchor: Element) {
		history.replaceState({}, null, `manual#${anchor.id}`);
	}

}
