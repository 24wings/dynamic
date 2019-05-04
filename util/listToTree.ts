import { NzTreeNode } from 'ng-zorro-antd';
import { AbstractTree } from './AbstractTree';

class SimpleTree {
  title: string;
  key: string;
  children: any[];
}
export function list2Tree<T extends SimpleTree>(data, keyExpr, parentIdExpr, displayExpr) {
  let treeMenus: SimpleTree[] = [];
  function getChildren<T>(topItem: SimpleTree, options: SimpleTree[]): SimpleTree[] {
    let children = options.filter(menu => menu[parentIdExpr] == topItem[keyExpr]);
    for (let submenu of children) {
      submenu.key = submenu[keyExpr];
      submenu.title = submenu[displayExpr];
      submenu.children = getChildren<SimpleTree>(submenu, options);
    }
    return children;
  }
  /**
   * 所有菜单上级不存在当前菜单列表中的都为顶级菜单
   */
  let topMenus = data.filter(menu => !data.find(item => menu[parentIdExpr] == item[keyExpr]));
  topMenus.forEach(m => {
    m.key = m[keyExpr];
    m.title = m[displayExpr];
    m.parentId = m[parentIdExpr];
  });
  if (!topMenus || topMenus.length == 0) return [];
  for (let menu of topMenus) {
    menu.children = getChildren<T>(menu, data);
  }
  return topMenus;
}

export function listToTree<T>(list: AbstractTree<T>[]): AbstractTree<T>[] {
  let treeMenus: AbstractTree<T>[] = [];
  function getChildren<T>(topItem: AbstractTree<T>, options: AbstractTree<T>[]): AbstractTree<T>[] {
    let children = options.filter(menu => menu.getParentId() == topItem.getId());
    for (let submenu of children) {
      submenu.children = getChildren<T>(submenu, options);
    }
    return children;
  }
  /**
   * 所有菜单上级不存在当前菜单列表中的都为顶级菜单
   */
  let topMenus = list.filter(menu => !list.find(item => menu.getParentId() == item.getId()));
  if (!topMenus || topMenus.length == 0) return [];
  for (let menu of topMenus) {
    menu.children = getChildren<T>(menu, list);
  }
  return topMenus;
}

export function listToNzTreeNode<T>(list: AbstractTree<T>[]): NzTreeNode[] {
  let trees = listToTree(list);
  function optionToNode(children: AbstractTree<T>[]) {
    for (let tree of children) {
      if (tree.children) {
        if (tree.children.length > 0) {
          tree.children = optionToNode(tree.children);
        } else {
        }
      }
    }
    return children.map(child => {
      return {
        key: child.getId() + '',
        title: child.getText(),
        origin: child,
        children: child.children as any,
        checked: !!child.checked,
        isLeaf: false,
        disabled: !!child['disabled'],
        disableCheckbox: !!child['disabled'],
        isSelected: !!child.selected,
      };
    }) as any;
  }
  return trees.map(tree => {
    if (tree.children.length > 0) {
      tree.children = optionToNode(tree.children) as any;
      console.log(tree);
    }
    return new NzTreeNode({
      title: tree.getText(),
      key: tree.getId() + '',
      children: tree.children as any,
      origin: tree,
      checked: !!tree.checked,
      isSelected: !!tree.selected,
      isMatched: !!tree.selected,
      disableCheckbox: !!tree['disabled'],
      disabled: !!tree['disabled'],
    });
  });
}

/**
 * 树形复数解析
 *
 * 除了树的底层外,都不checked
 */
export function listToNzTreeNodeMany<T>(list: AbstractTree<T>[]): NzTreeNode[] {
  let trees = listToTree(list);
  function optionToNode(children: AbstractTree<T>[]) {
    for (let tree of children) {
      if (tree.children) {
        if (tree.children.length > 0) {
          tree.checked = false;
          tree.children = optionToNode(tree.children);
        } else {
          // tree.checked = true;
        }
      } else {
        /** 无children模式下,所有节点都是 */
        // tree.checked = true;
      }
    }
    return children.map(child => {
      return {
        key: child.getId() + '',
        title: child.getText(),
        origin: child,
        children: child.children as any,
        checked: !!child.checked,
        isLeaf: false,
        disabled: !!child['disabled'],
        disableCheckbox: !!child['disabled'],
        isSelected: !!child.selected,
      };
    }) as any;
  }
  return trees.map(tree => {
    if (tree.children.length > 0) {
      tree.children = optionToNode(tree.children) as any;
      console.log(tree);
    }
    return new NzTreeNode({
      title: tree.getText(),
      key: tree.getId() + '',
      children: tree.children as any,
      origin: tree,
      checked: false,
      isSelected: !!tree.selected,
      isMatched: !!tree.selected,
      disableCheckbox: !!tree['disabled'],
      disabled: !!tree['disabled'],
    });
  });
}
