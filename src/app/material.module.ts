import { NgModule } from "@angular/core";
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
    imports: [MatTabsModule,MatDialogModule,MatProgressSpinnerModule],
    exports: [MatTabsModule,MatDialogModule,MatProgressSpinnerModule],

})
export class MaterialModule {}