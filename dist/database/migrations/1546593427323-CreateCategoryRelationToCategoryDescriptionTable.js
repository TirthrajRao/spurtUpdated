"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateCategoryRelationToCategoryDescriptionTable1546593427323 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_Category_CategoryDescription',
            columnNames: ['category_id'],
            referencedColumnNames: ['category_id'],
            referencedTableName: 'category',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('category_description', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('category_description', this.tableForeignKey);
        });
    }
}
exports.CreateCategoryRelationToCategoryDescriptionTable1546593427323 = CreateCategoryRelationToCategoryDescriptionTable1546593427323;
//# sourceMappingURL=1546593427323-CreateCategoryRelationToCategoryDescriptionTable.js.map